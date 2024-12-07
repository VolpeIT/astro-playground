import { daysLeft } from "../../utils";
import type { AdaptedCourse } from "./types";
import { Calendar, Soon } from "./svgs";

interface Props {
  course: AdaptedCourse;
}

function formatearFecha(fechaISO: string): string {
  const fecha = new Date(fechaISO);

  if (isNaN(fecha.getTime())) {
    throw new Error("Fecha inválida");
  }

  const monthAbbreviations = {
    0: "en.",
    1: "feb.",
    2: "mar.",
    3: "abr.",
    4: "may.",
    5: "jun.",
    6: "jul.",
    7: "agto.",
    8: "sept.",
    9: "oct.",
    10: "nov.",
    11: "dic.",
  };

  const dia = fecha.getDate();

  // @ts-ignore
  const mes = monthAbbreviations[fecha.getMonth()];

  return `${dia} ${mes}`;
}

const stylesForOneImage: React.CSSProperties = {
  width: `170px`,
  objectFit: "cover" as React.CSSProperties["objectFit"],
};

const stylesForTwoOrMoreImages: React.CSSProperties = {
  width: "50%",
  objectFit: "contain" as React.CSSProperties["objectFit"],
  maxWidth: "180px",
  minWidth: "130px",
};

const articleStyles = `bg-white 
    grid grid-cols-2
    relative p-4

    rounded-lg
    transition-transform
    transform-gpu
    hover:shadow-[#667085bb] 
    hover:translate-y-[-.25rem] 
    shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)]
    
  `;

const pillStyles =
  "text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl px-2 py-0.5 text-xs";

export const EdisonMarketCard: React.FC<Props> = ({ course }: Props) => {
  const {
    usersJobs,
    usersNames,
    pics,
    pill,
    color,
    startTime,
    href,
    comingSoon,
    name,
  } = course;

  const twoOrMoreImages = pics.length > 1;

  const footer = {
    false: (
      <>
        <span className="place-self-start col-start-1 font-semibold text-sm flex items-center gap-1">
          <Calendar />
          {formatearFecha(startTime)}
        </span>
        <span className="place-self-end col-start-2 text-sm text-red-500 flex items-center gap-1">
          {daysLeft(startTime) < 9 && daysLeft(startTime) > -1 && (
            <>
              <Soon />
              Empieza pronto
            </>
          )}
        </span>
      </>
    ),
    true: (
      <span className="col-span-2 font-semibold place-self-center text-sm">
        Proximamente
      </span>
    ),
  };

  return (
    <a
      href={href}
      className={articleStyles}
      style={{
        gridTemplateRows: "200px min-content min-content 1fr",
        willChange: "transform",
      }}
    >
      <span className={pillStyles} style={{ backgroundColor: color }}>
        {pill}
      </span>
      <div className="col-span-2 flex justify-center">
        {pics.map((pic, i) => {
          if (i > 1) return null;
          const styles = twoOrMoreImages
            ? stylesForTwoOrMoreImages
            : stylesForOneImage;
          const left =
            twoOrMoreImages && i === 0 ? { transform: `translate(1rem)` } : {};
          const right =
            twoOrMoreImages && i === 1 ? { transform: `translate(-1rem)` } : {};
          return (
            <img
              key={i}
              src={pic}
              className="place-self-center aspect-square p-0.5 border-2 rounded-full bg-white"
              style={{ ...styles, ...left, ...right, borderColor: color }}
              alt={`Image ${i + 1}`}
            />
          );
        })}
      </div>
      <p className="col-span-2 font-semibold mb-2 text-balance">{name}</p>
      <p className="col-span-2 text-violet-500 text-sm line-clamp-1">
        {usersNames}
      </p>
      <p className="col-span-2 text-gray-500 text-sm mb-4 line-clamp-2 max-h-[2.4rem]">
        {usersJobs}
      </p>
      {footer[comingSoon ? "true" : "false"]}
    </a>
  );
};

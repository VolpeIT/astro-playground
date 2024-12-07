/* empty css                                */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro } from '../chunks/astro/server_D5P5sAKc.mjs';
import 'kleur/colors';
import { a as aResult, $ as $$Layout } from '../chunks/Layout_CI0KheRh.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import axios from 'axios';
/* empty css                                */
export { renderers } from '../renderers.mjs';

function timeLeft(date, unit = "days") {
  const _date = new Date(date);
  const today = /* @__PURE__ */ new Date();
  const minisecsDifference = _date.getTime() - today.getTime();
  const units = {
    minutes: 60 * 1e3,
    hours: 60 * 60 * 1e3,
    days: 24 * 60 * 60 * 1e3
  };
  const differenceInUnits = Math.round(minisecsDifference / units[unit]);
  return differenceInUnits;
}
const daysLeft = (date) => timeLeft(date, "days");

const Authorization = "l33hDPtjJK0emSag5NcJKdrJbWXUFpORTSih";
axios.create({
  baseURL: "https://api.somosedison.com",
  headers: {
    Authorization
  }
});
const api_qa = axios.create({
  baseURL: "https://qa.api.somosedison.com/",
  headers: {
    Authorization
  }
});
axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    Authorization
  }
});

const Calendar = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("g", { id: "CalendarBlank", children: /* @__PURE__ */ jsx(
        "path",
        {
          id: "Vector",
          d: "M13 1.99915H11.5V1.49921C11.5 1.36662 11.4473 1.23945 11.3536 1.1457C11.2598 1.05194 11.1326 0.999268 11 0.999268C10.8674 0.999268 10.7402 1.05194 10.6465 1.1457C10.5527 1.23945 10.5 1.36662 10.5 1.49921V1.99915H5.5V1.49921C5.5 1.36662 5.44732 1.23945 5.35356 1.1457C5.25979 1.05194 5.13261 0.999268 5 0.999268C4.86739 0.999268 4.74022 1.05194 4.64645 1.1457C4.55268 1.23945 4.5 1.36662 4.5 1.49921V1.99915H3C2.73478 1.99915 2.48043 2.10449 2.29289 2.29201C2.10536 2.47952 2 2.73384 2 2.99903V12.9978C2 13.263 2.10536 13.5173 2.29289 13.7048C2.48043 13.8924 2.73478 13.9977 3 13.9977H13C13.2652 13.9977 13.5196 13.8924 13.7071 13.7048C13.8947 13.5173 14 13.263 14 12.9978V2.99903C14 2.73384 13.8947 2.47952 13.7071 2.29201C13.5196 2.10449 13.2652 1.99915 13 1.99915ZM4.5 2.99903V3.49897C4.5 3.63156 4.55268 3.75872 4.64645 3.85248C4.74022 3.94623 4.86739 3.99891 5 3.99891C5.13261 3.99891 5.25979 3.94623 5.35356 3.85248C5.44732 3.75872 5.5 3.63156 5.5 3.49897V2.99903H10.5V3.49897C10.5 3.63156 10.5527 3.75872 10.6465 3.85248C10.7402 3.94623 10.8674 3.99891 11 3.99891C11.1326 3.99891 11.2598 3.94623 11.3536 3.85248C11.4473 3.75872 11.5 3.63156 11.5 3.49897V2.99903H13V4.99879H3V2.99903H4.5ZM13 12.9978H3V5.99867H13V12.9978Z",
          fill: "#101828"
        }
      ) })
    }
  );
};

const Soon = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("g", { id: "BellSimpleRinging", children: /* @__PURE__ */ jsxs("g", { id: "run stopwatch", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            id: "Vector",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.2157 5.90533C10.2634 5.48639 9.19454 5.4141 8.19456 5.70099C7.19457 5.98788 6.32661 6.61586 5.74131 7.47592C5.15601 8.33598 4.89032 9.37383 4.99037 10.4093C5.09042 11.4448 5.54989 12.4126 6.28902 13.1447C7.02815 13.8768 8.00028 14.327 9.0367 14.4171C10.0731 14.5073 11.1084 14.2317 11.9628 13.6382C12.8172 13.0447 13.4369 12.1708 13.7142 11.1681C13.9915 10.1654 13.909 9.09726 13.481 8.14907C13.4563 8.092 13.4205 8.0404 13.3757 7.99729C13.3309 7.95418 13.278 7.9204 13.22 7.89794C13.1621 7.87548 13.1002 7.86478 13.0381 7.86645C12.9759 7.86813 12.9147 7.88216 12.858 7.90771C12.8014 7.93327 12.7503 7.96984 12.7079 8.01531C12.6655 8.06078 12.6326 8.11423 12.611 8.17254C12.5895 8.23086 12.5798 8.29289 12.5824 8.355C12.5851 8.41712 12.6 8.47808 12.6265 8.53435C12.9646 9.28289 13.0298 10.1262 12.811 10.9178C12.5922 11.7095 12.1031 12.3995 11.4286 12.8682C10.7541 13.3368 9.93678 13.5545 9.11852 13.4834C8.30027 13.4124 7.53273 13.057 6.94913 12.4791C6.36553 11.9012 6.00273 11.1371 5.92368 10.3196C5.84464 9.50206 6.05434 8.68267 6.51641 8.00363C6.97847 7.32459 7.66371 6.82878 8.45319 6.60226C9.24267 6.37573 10.0866 6.4328 10.8383 6.76355C10.951 6.8071 11.0762 6.80546 11.1877 6.75896C11.2992 6.71247 11.3884 6.62471 11.4368 6.51401C11.4852 6.4033 11.4889 6.2782 11.4473 6.16479C11.4057 6.05138 11.3218 5.95843 11.2133 5.90533H11.2157Z",
            fill: "#D92D20"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            id: "Vector_2",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.7132 6.6929C12.6253 6.60503 12.5061 6.55566 12.3818 6.55566C12.2575 6.55566 12.1383 6.60503 12.0504 6.6929L9.9529 8.79039C9.71171 8.68313 9.44367 8.65149 9.18413 8.69963C8.92458 8.74777 8.68573 8.87344 8.49905 9.06007C8.31237 9.2467 8.18663 9.48553 8.13842 9.74506C8.0902 10.0046 8.12178 10.2726 8.22897 10.5139L7.90696 10.8359C7.82158 10.9243 7.77434 11.0427 7.77541 11.1656C7.77648 11.2885 7.82577 11.406 7.91267 11.4929C7.99958 11.5798 8.11714 11.6291 8.24003 11.6302C8.36293 11.6312 8.48133 11.584 8.56973 11.4986L8.89173 11.1771C9.13297 11.2842 9.40099 11.3156 9.66048 11.2674C9.91996 11.2192 10.1588 11.0934 10.3454 10.9068C10.532 10.7202 10.6577 10.4814 10.706 10.2219C10.7542 9.96241 10.7227 9.69439 10.6157 9.45315L12.7132 7.35566C12.801 7.26776 12.8504 7.14856 12.8504 7.02428C12.8504 6.89999 12.801 6.78079 12.7132 6.6929ZM9.68292 10.2439C9.63141 10.2954 9.56577 10.3306 9.4943 10.3448C9.42282 10.3591 9.34873 10.3518 9.28139 10.3239C9.21405 10.296 9.15649 10.2488 9.11599 10.1882C9.07549 10.1276 9.05387 10.0564 9.05387 9.98351C9.05387 9.91062 9.07549 9.83938 9.11599 9.77879C9.15649 9.7182 9.21405 9.67098 9.28139 9.6431C9.34873 9.61523 9.42282 9.60796 9.4943 9.6222C9.56577 9.63645 9.63141 9.67157 9.68292 9.72313C9.75187 9.79228 9.79055 9.88596 9.79046 9.9836C9.79037 10.0812 9.75152 10.1749 9.68245 10.2439H9.68292Z",
            fill: "#D92D20"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            id: "Vector_3",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.8965 5.50889C12.8252 4.43505 11.4027 3.78353 9.88988 3.67388C9.82545 3.67388 9.50811 3.67376 8.95246 3.67388C7.44013 3.78386 6.01815 4.43536 4.94729 5.50889C4.90253 5.55213 4.86682 5.60385 4.84225 5.66103C4.81769 5.71822 4.80476 5.77972 4.80422 5.84196C4.80368 5.90419 4.81554 5.96592 4.8391 6.02352C4.86267 6.08112 4.89747 6.13345 4.94148 6.17746C4.98549 6.22147 5.03782 6.25628 5.09543 6.27984C5.15303 6.30341 5.21475 6.31527 5.27699 6.31473C5.33922 6.31419 5.40073 6.30126 5.45791 6.27669C5.5151 6.25213 5.56682 6.21642 5.61005 6.17165C6.36393 5.41792 7.32438 4.90465 8.36995 4.69676C9.41552 4.48886 10.4993 4.59566 11.4841 5.00366C12.469 5.41166 13.3108 6.10254 13.903 6.98894C14.4953 7.87533 14.8114 8.91743 14.8114 9.98347C14.8114 11.0495 14.4953 12.0916 13.903 12.978C13.3108 13.8644 12.469 14.5553 11.4841 14.9633C10.4993 15.3713 9.41552 15.4781 8.36995 15.2702C7.32438 15.0623 6.36393 14.549 5.61005 13.7953C5.56682 13.7505 5.5151 13.7148 5.45791 13.6903C5.40073 13.6657 5.33922 13.6528 5.27699 13.6522C5.21475 13.6517 5.15303 13.6635 5.09543 13.6871C5.03782 13.7107 4.98549 13.7455 4.94148 13.7895C4.89747 13.8335 4.86267 13.8858 4.8391 13.9434C4.81554 14.001 4.80368 14.0628 4.80422 14.125C4.80476 14.1872 4.81769 14.2487 4.84225 14.3059C4.86682 14.3631 4.90253 14.4148 4.94729 14.4581C6.13402 15.6448 7.74358 16.3115 9.42187 16.3115C11.1002 16.3115 12.7097 15.6448 13.8965 14.4581C15.0832 13.2713 15.7499 11.6618 15.7499 9.98347C15.7499 8.30518 15.0832 6.69562 13.8965 5.50889Z",
            fill: "#D92D20"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            id: "Vector_4",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.49979 8.3427C4.6241 8.3427 4.74332 8.29332 4.83122 8.20542C4.91912 8.11752 4.9685 7.9983 4.9685 7.87399C4.9685 7.74968 4.91912 7.63046 4.83122 7.54256C4.74332 7.45466 4.6241 7.40527 4.49979 7.40527H2.15621C2.0319 7.40527 1.91268 7.45466 1.82478 7.54256C1.73688 7.63046 1.6875 7.74968 1.6875 7.87399C1.6875 7.9983 1.73688 8.11752 1.82478 8.20542C1.91268 8.29332 2.0319 8.3427 2.15621 8.3427H4.49979Z",
            fill: "#D92D20"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            id: "Vector_5",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.10953 9.51465H2.54684C2.42253 9.51465 2.30331 9.56403 2.21541 9.65193C2.12751 9.73983 2.07812 9.85905 2.07812 9.98336C2.07812 10.1077 2.12751 10.2269 2.21541 10.3148C2.30331 10.4027 2.42253 10.4521 2.54684 10.4521H4.10953C4.23384 10.4521 4.35306 10.4027 4.44096 10.3148C4.52886 10.2269 4.57825 10.1077 4.57825 9.98336C4.57825 9.85905 4.52886 9.73983 4.44096 9.65193C4.35306 9.56403 4.23384 9.51465 4.10953 9.51465Z",
            fill: "#D92D20"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            id: "Vector_6",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.10925 11.624H2.93746C2.81315 11.624 2.69393 11.6734 2.60603 11.7613C2.51813 11.8492 2.46875 11.9684 2.46875 12.0927C2.46875 12.217 2.51813 12.3363 2.60603 12.4242C2.69393 12.5121 2.81315 12.5615 2.93746 12.5615H4.10925C4.23356 12.5615 4.35278 12.5121 4.44068 12.4242C4.52858 12.3363 4.57796 12.217 4.57796 12.0927C4.57796 11.9684 4.52858 11.8492 4.44068 11.7613C4.35278 11.6734 4.23356 11.624 4.10925 11.624Z",
            fill: "#D92D20"
          }
        )
      ] }) })
    }
  );
};

function formatearFecha(fechaISO) {
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
    11: "dic."
  };
  const dia = fecha.getDate();
  const mes = monthAbbreviations[fecha.getMonth()];
  return `${dia} ${mes}`;
}
const stylesForOneImage = {
  width: `170px`,
  objectFit: "cover"
};
const stylesForTwoOrMoreImages = {
  width: "50%",
  objectFit: "contain",
  maxWidth: "180px",
  minWidth: "130px"
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
const pillStyles = "text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl px-2 py-0.5 text-xs";
const EdisonMarketCard = ({ course }) => {
  const {
    usersJobs,
    usersNames,
    pics,
    pill,
    color,
    startTime,
    href,
    comingSoon,
    name
  } = course;
  const twoOrMoreImages = pics.length > 1;
  const footer = {
    false: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("span", { className: "place-self-start col-start-1 font-semibold text-sm flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Calendar, {}),
        formatearFecha(startTime)
      ] }),
      /* @__PURE__ */ jsx("span", { className: "place-self-end col-start-2 text-sm text-red-500 flex items-center gap-1", children: daysLeft(startTime) < 9 && daysLeft(startTime) > -1 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Soon, {}),
        "Empieza pronto"
      ] }) })
    ] }),
    true: /* @__PURE__ */ jsx("span", { className: "col-span-2 font-semibold place-self-center text-sm", children: "Proximamente" })
  };
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      className: articleStyles,
      style: {
        gridTemplateRows: "200px min-content min-content 1fr",
        willChange: "transform"
      },
      children: [
        /* @__PURE__ */ jsx("span", { className: pillStyles, style: { backgroundColor: color }, children: pill }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2 flex justify-center", children: pics.map((pic, i) => {
          if (i > 1) return null;
          const styles = twoOrMoreImages ? stylesForTwoOrMoreImages : stylesForOneImage;
          const left = twoOrMoreImages && i === 0 ? { transform: `translate(1rem)` } : {};
          const right = twoOrMoreImages && i === 1 ? { transform: `translate(-1rem)` } : {};
          return /* @__PURE__ */ jsx(
            "img",
            {
              src: pic,
              className: "place-self-center aspect-square p-0.5 border-2 rounded-full bg-white",
              style: { ...styles, ...left, ...right, borderColor: color },
              alt: `Image ${i + 1}`
            },
            i
          );
        }) }),
        /* @__PURE__ */ jsx("p", { className: "col-span-2 font-semibold mb-2 text-balance", children: name }),
        /* @__PURE__ */ jsx("p", { className: "col-span-2 text-violet-500 text-sm line-clamp-1", children: usersNames }),
        /* @__PURE__ */ jsx("p", { className: "col-span-2 text-gray-500 text-sm mb-4 line-clamp-2 max-h-[2.4rem]", children: usersJobs }),
        footer[comingSoon ? "true" : "false"]
      ]
    }
  );
};

const edisonMarketAdapter = (course) => {
  const href = `curso/${course.urlLanding}`;
  const { startTime } = course?.events?.[0] || { startTime: "" };
  const { htmlColor: color, value: pill } = course?.category || {};
  const pics = course?.users?.map((user) => user.user.picture) || [];
  const usersNames = course?.users?.map((user) => user.user.name).join(" y ") || "";
  const usersJobs = course.users?.map(
    (user) => `${user.user?.jobTitle ? `${user.user.jobTitle} ` : ""}${user.user?.company ? `@${user.user?.company}` : ""}`
  ).filter((job) => job.trim() !== "").join(" y ");
  const { comingSoon, name } = course;
  return {
    href,
    startTime,
    color,
    pill,
    pics,
    usersNames,
    usersJobs,
    comingSoon,
    name
  };
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.response.headers.set("Cache-Control", "public, s-maxage=30, stale-while-revalidate=20");
  const ACADEMY_ID = "2a748937-dfff-419c-908e-fa16856e19fe";
  const [_err2, res2] = await api_qa.get[aResult](`/courses/market/${ACADEMY_ID}`);
  if (res2 == null) throw new Error("no data");
  const courses = res2.data;
  const adaptedCourses = courses.map(edisonMarketAdapter);
  const currentTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
  return renderTemplate`${maybeRenderHead()}<p data-astro-cid-v46lo3zv>${currentTime}</p> <div class="text-black grid w-full auto-rows-fr gap-4" data-astro-cid-v46lo3zv> ${adaptedCourses.map((course) => renderTemplate`${renderComponent($$result, "EdisonMarketCard", EdisonMarketCard, { "course": course, "data-astro-cid-v46lo3zv": true })}`)} </div> `;
}, "/home/fede/dev/volpe/astro-playground/src/components/EdisonMarket/index.astro", void 0);

const $$Grid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "grid" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "EdisonMarket", $$Index, {})} ` })}`;
}, "/home/fede/dev/volpe/astro-playground/src/pages/grid.astro", void 0);

const $$file = "/home/fede/dev/volpe/astro-playground/src/pages/grid.astro";
const $$url = "/grid";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Grid,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

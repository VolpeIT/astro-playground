import { useStore } from "@nanostores/react";
import { _1, _2, _3, _checksAtom, _5 } from "../store";
import { _l1, _l2, _l3 } from "../store";
import { Filter } from "@volpe/utils";
import type { IPerson } from "../types/Person";

export const AtomDisplay = ({ personas }: { personas: IPerson[] }) => {
  const $1 = useStore(_1);
  const $2 = useStore(_2);
  const $3 = useStore(_3);
  const $4 = useStore(_checksAtom);

  const filtered = Filter.from(personas)
    .filterByString($1, ["name"])
    // .filterByString($2, ["hobbies"])
    // .filterByNumber($3, ["favorites", "numbers"])
    // .filterByObject({ socialMedia: { platform: "Twitter" } })
    .union()
    .filterByCheck($4, ["hobbies"])
    .disjunction()
    .wrap();

  return (
    <div>
      <p>name: {$1}</p>
      <p>hobbies: {$2}</p>
      <p>favorites.numbers: {$3}</p>
      <p>
        {filtered.map((person) => (
          <a key={person.name} href={`/person/${person.name.toLowerCase()}`}>
            {person.name}
          </a>
        ))}
      </p>
      {JSON.stringify(filtered)}
    </div>
  );
};

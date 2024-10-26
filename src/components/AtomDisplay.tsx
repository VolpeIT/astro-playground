import { useStore } from "@nanostores/react";
import { _1, _2, _3 } from "../store";
import { _l1, _l2, _l3 } from "../store";
import { Filter } from "@volpe/utils";

export const AtomDisplay = ({ personas }: { personas: Persona[] }) => {
  const $1 = useStore(_1);
  const $2 = useStore(_2);
  const $3 = useStore(_3);

  const $l1 = useStore(_l1);
  const $l2 = useStore(_l2);
  const $l3 = useStore(_l3);

  if ($l1 || $l2 || $l3) return <>Buscando...</>;

  const filtered = Filter.from(personas)
    .filterByString($1, ["nombre"])
    .filterByString($2, ["favoritos", "comida"])
    .filterByNumber($3, ["edad"])
    .get();

  return (
    <div>
      <p>_1: {$1}</p>
      <p>_2: {$2}</p>
      <p>_3: {$3}</p>
      <p>{JSON.stringify(filtered)}</p>
    </div>
  );
};

interface Persona {
  nombre: string;
  edad: number;
  esEmpleado: boolean;
  direccion: {
    calle: string;
    ciudad: string;
    pais: string;
  };
  hobbies: string[];
  redesSociales: {
    plataforma: string;
    username: string;
  }[];
  favoritos: {
    comida: string;
    color: string;
    numeros: number[];
  };
}

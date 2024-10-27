import { useUrlCheckboxAtom } from "@volpe/react-utils";
import { _checksAtom } from "../store";

export const Checks = () => {
  const [selectedCategories, handleCheckboxChange] = useUrlCheckboxAtom(
    _checksAtom,
    "categorias"
  );

  return (
    <>
      <label>
        <input
          type="checkbox"
          name="videojuegos"
          checked={selectedCategories.includes("videojuegos")}
          onChange={handleCheckboxChange}
        />
        videojuegos
      </label>

      <label>
        <input
          type="checkbox"
          name="pintura"
          checked={selectedCategories.includes("pintura")}
          onChange={handleCheckboxChange}
        />
        pintura
      </label>
    </>
  );
};

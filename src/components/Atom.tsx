import { useUrlInputAtom } from "@volpe/react-utils";
import { _1, _2, _3 } from "../store";
import { _l1, _l2, _l3 } from "../store";

export const Atom = () => {
  const [value1, handler1] = useUrlInputAtom(_1, "nombre");
  const [value2, handler2] = useUrlInputAtom(_2, "comida");
  const [value3, handler3] = useUrlInputAtom(_3, "edad");

  return (
    <div>
      <input onChange={handler1} value={value1} />
      <input onChange={handler2} value={value2} />
      <input onChange={handler3} value={value3} />
    </div>
  );
};

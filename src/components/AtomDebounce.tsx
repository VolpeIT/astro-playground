import { useUrlInputAtomDebounce } from "@volpe/react-utils";
import { _1, _2, _3 } from "../store";
import { _l1, _l2, _l3 } from "../store";

export const AtomDebounce = () => {
  const [value1, handler1] = useUrlInputAtomDebounce(_1, "name", _l1);
  const [value2, handler2] = useUrlInputAtomDebounce(_2, "food", _l2);
  const [value3, handler3] = useUrlInputAtomDebounce(_3, "age", _l3);

  return (
    <div>
      <input onChange={handler1} value={value1} />
      <input onChange={handler2} value={value2} />
      <input onChange={handler3} value={value3} />
    </div>
  );
};

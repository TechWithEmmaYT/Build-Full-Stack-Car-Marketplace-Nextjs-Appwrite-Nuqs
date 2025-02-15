import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

const useDebounce = <T>(value: T, delay: number = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const debouncedUpdate = debounce(() => {
      setDebouncedValue(value);
    }, delay);

    debouncedUpdate();

    return () => {
      debouncedUpdate.cancel();
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

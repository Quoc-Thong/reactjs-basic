import { useCallback, useState, Dispatch, SetStateAction } from 'react';

export type UseBooleanResult = {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
  setValue: Dispatch<SetStateAction<boolean>>;
};

function useBoolean(defaultValue?: boolean): UseBooleanResult {
  const [value, setValue] = useState<boolean>(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setTrue, setFalse, toggle, setValue };
}

export default useBoolean;

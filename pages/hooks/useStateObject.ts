import { useCallback, useState } from 'react';

type ObjectState = Record<string, any>;

function useStateObject<T extends {}>(defaultValue?: T): [T, (obj: ObjectState) => void] {
  const [value, setValue] = useState<T>((defaultValue || {}) as T);

  const updateObject = useCallback((newObj: ObjectState) => {
    setValue((prevObj: T) => ({ ...prevObj, ...newObj }));
  }, []);

  return [value, updateObject];
}

export default useStateObject;

import { useState, useEffect, useRef } from "react";

function useLocalStorageState(key, initialData) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialData
  );

  // keep state of key so if it changes we can reference this value for comparison
  const previousKeyRef = useRef(key);

  useEffect(() => {
    const previousKey = previousKeyRef.current;

    // if the key value has changed, remove the previous item from local storage
    if (previousKey !== key) {
      window.localStorage.removeItem(previousKey);
    }

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorageState;

import { useState, useEffect } from "react";

function useLocalStorage(key, initialData) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialData
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

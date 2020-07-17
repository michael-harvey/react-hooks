import { useState, useEffect } from "react";

function useLocalStorage(key, initialData) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("todos")) || initialData
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

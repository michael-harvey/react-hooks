import { useState, useEffect, useRef } from "react";

/**
 * localStorage hook for setting and updating localStorage state
 * 
 * @param {string} localStorage key 
 * @param {any} initialState value
 * @returns [state, updater]
 */
function useLocalStorageState(key, initialState) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage)
    }
    
    // if a function is passed, call it to get the return value
    return typeof initialState === 'function' ? initialState() : initialState;
  });

  // keep state of key so if it changes we can reference this value for comparison
  const previousKeyRef = useRef(key);

  useEffect(() => {
    const previousKey = previousKeyRef.current;

    // if the key value has changed, remove the previous item from local storage
    if (previousKey !== key) {
      window.localStorage.removeItem(previousKey);
    }

    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;

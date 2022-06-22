import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // Check if functional set state
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    // Set to state
    setLocalStorageValue(value);
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
};

const getLocalStorageValue = (key, initialValue) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
};

export default useLocalStorage;

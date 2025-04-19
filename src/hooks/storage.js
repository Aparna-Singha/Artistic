import { useCallback } from "react"

export const useStorage = () => {
  const setStorage = useCallback((key, updatedData) => {
    localStorage.setItem(key, JSON.stringify(updatedData));
  }, []);

  const getStorage = useCallback((key, defaultValue) => {
    const existingData = localStorage.getItem(key);
    return JSON.parse(existingData) ?? defaultValue;
  }, []);

  return {setStorage, getStorage};
}

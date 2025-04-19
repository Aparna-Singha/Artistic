import { createContext, useCallback, useEffect, useState } from "react";
import { useStorage } from "../hooks/storage";

const SubmissionsContext = createContext();

const SubmissionsProvider = ({ children }) => {
  const { getStorage, setStorage }= useStorage();

  const storageKey = 'submissions';
  const existingData = getStorage(storageKey, []);
  
  const [submissions, setSubmissions] = useState(existingData);
  
  const addSubmission = useCallback((submission) => {
    setSubmissions(prev => [...prev, { ...submission }]);
  }, []);

  const removeSubmission = useCallback((id) => {
    setSubmissions(prev => prev.filter(s => s.id !== id));
  }, []);

  useEffect(() => {
    setStorage(storageKey, submissions);
  }, [submissions, setStorage, storageKey]);

  return (
    <SubmissionsContext.Provider value={{
      submissions,
      addSubmission,
      removeSubmission,
    }}>
      {children}
    </SubmissionsContext.Provider>
  );
};

export {
  SubmissionsContext,
  SubmissionsProvider,
};


import { createContext, useCallback, useEffect, useState } from "react";
import { getAllArts, postArt } from "../api/art";

const SubmissionsContext = createContext();

const SubmissionsProvider = ({ children }) => {  
  const [submissions, setSubmissions] = useState([]);
  
  const refreshArts = useCallback(async () => {
    const response = await getAllArts();
    if (response.status === 'success') {
      setSubmissions(response.arts);
    }
  }, []);

  const submitArt = useCallback(async (submission) => {
    await postArt(submission);
    refreshArts();
  }, [refreshArts]);

  useEffect(() => {
    refreshArts();
  }, [refreshArts]);

  return (
    <SubmissionsContext.Provider value={{
      submissions,
      submitArt,
    }}>
      {children}
    </SubmissionsContext.Provider>
  );
};

export {
  SubmissionsContext,
  SubmissionsProvider,
};


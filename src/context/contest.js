import { createContext } from "react";

export const ContestContext = createContext();

export const ContestProvider = ({ children }) => {
  const contestData = {
    // Add your contest data here
    name: "My Point of View Contest",
    description: "A contest to share your unique perspective.",
    rules: [
      "Submit your original work.",
      "Respect the community guidelines.",
      "Have fun and be creative!",
    ],
  };

  return (
    <ContestContext.Provider value={contestData}>
      {children}
    </ContestContext.Provider>
  );
}
export default ContestProvider;
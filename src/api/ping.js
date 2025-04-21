import { apiRequest } from "./base"

export const pingApi = new Promise((resolve) => {
  const callApi = async () => {
    try {
      await apiRequest("/");
      resolve(true);
    } catch (error) {
      console.error("Error pinging API:", error);
      setTimeout(callApi, 1000);
    }
  };

  callApi();
});


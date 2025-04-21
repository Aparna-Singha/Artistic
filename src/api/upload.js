import { apiRequest } from "./base";

export const getImageAuth = async () => {
  return await apiRequest('/image/auth', 'GET');
};

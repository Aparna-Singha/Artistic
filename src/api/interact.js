import { apiRequest } from "./base";

export const likePost = async (postId) => {
  return await apiRequest(`/interact/${postId}/like`, 'GET');
};

export const savePost = async (postId) => {
  return await apiRequest(`/interact/${postId}/save`, 'GET');
};

export const getLikes = async () => {
  return await apiRequest('/interact/likes', 'GET');
};

export const getSaves = async () => {
  return await apiRequest('/interact/saves', 'GET');
};

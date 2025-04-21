import { apiRequest } from "./base";

export const likePost = async (postId) => {
  return await apiRequest(`/interact/${postId}/like`, 'GET');
};

export const savePost = async (postId) => {
  return await apiRequest(`/interact/${postId}/save`, 'GET');
};

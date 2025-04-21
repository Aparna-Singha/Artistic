import { apiRequest } from "./base";

export const postArt = async (art) => {
  const url = '/art';
  const method = 'POST';
  const body = { data: art };

  const response = await apiRequest(url, method, body);
  if (response.status === 'success') {
    return {
      status: 'success',
      message: 'Art posted successfully',
    }
  }

  return {
    status: 'error',
    message: response.message || 'Failed to post art',
  }
};

export const getAllArts = async () => {
  const url = '/art';
  const method = 'GET';

  const response = await apiRequest(url, method);
  if (response.status === 'success') {
    return {
      status: 'success',
      arts: response.arts,
    }
  }

  return {
    status: 'error',
    message: response.message || 'Failed to fetch arts',
  }
}

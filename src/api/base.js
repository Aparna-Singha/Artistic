const BASE_URL = 'http://localhost:3000/api';

export const apiRequest = async (endpoint, method = 'GET', body = null) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'unauthenticated',
  };
  
  const options = {
    method,
    headers
  };

  if (body) {
    options.body = JSON.stringify(body);
  }
  
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);
  return await response.json();
};

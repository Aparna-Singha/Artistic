const BASE_URL = 'https://artisticserver.onrender.com/api';

export const apiRequest = async (endpoint, method = 'GET', body = null) => {
  const authToken = JSON.parse(localStorage.getItem('token') || 'null');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': authToken ? `Bearer ${authToken}` : '',
  };
  
  const options = {
    method,
    headers
  };

  if (body) {
    options.body = JSON.stringify(body);
  }
  
  let url = `${BASE_URL}${endpoint}`;
  if (window.location.hostname === 'localhost') {
    url = `http://localhost:3000/api${endpoint}`;
  }

  const response = await fetch(url, options);
  return await response.json();
};

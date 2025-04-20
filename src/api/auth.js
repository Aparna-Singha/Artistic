import { apiRequest } from "./base";

export const login = async (username, password) => {
  const url = '/auth/login';
  const method = 'POST';
  const body = { username, password };

  const response = await apiRequest(url, method, body);
  if (response.status === 'success' && response.token) {
    return {
      status: 'success',
      token: response.token,
      message: 'Login successful',
    }
  }

  return {
    status: 'error',
    message: response.message || 'Login failed',
  }
}

export const register = async (email, username, password) => {
  const url = '/auth/register';
  const method = 'POST';
  const body = { username, email, password };

  const response = await apiRequest(url, method, body);
  if (response.status === 'success') {
    return {
      status: 'success',
      token: response.token,
      message: 'Registration successful',
    }
  }

  return {
    status: 'error',
    message: response.message || 'Registration failed',
  }
}

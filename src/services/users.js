import axios from 'axios';
const BASE_URL = '/api/users';

export const createNewUser = async (credentials) => {
  const response = await axios.post(BASE_URL, credentials);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const updateUser = async (id, details) => {
  const response = await axios.put(`${BASE_URL}/${id}`, details);
  return response.data;
};

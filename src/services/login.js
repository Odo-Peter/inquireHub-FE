import axios from 'axios';
const BASE_URL = '/api/login';

export const loginUser = async (credentials) => {
  const res = await axios.post(BASE_URL, credentials);
  return res.data;
};

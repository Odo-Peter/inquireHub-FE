import axios from 'axios';
const BASE_URL = 'https://inquirehub-hkk4.onrender.com/api/code';

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const getAssistantResponseCode = async (message) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(BASE_URL, message, config);
  return response.data;
};

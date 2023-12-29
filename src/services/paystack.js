import axios from 'axios';
const BASE_URL = '/api/paystack/pay';

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const subscribeToPro = async (credentials) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(BASE_URL, credentials, config);

  return response.data;
};

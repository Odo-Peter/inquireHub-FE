import axios from 'axios';
const BASE_URL = 'https://inquirehub-hkk4.onrender.com/api/paystack/pay';

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const subscribeToPro = async (credentials) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(BASE_URL, credentials, config);

  // console.log(response);
  return response.data;
};

const axios = require('axios');

const api = axios.create({
  baseURL:'https://api-trybers.vercel.app/api/v1',
});

export const getTrybers = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const postTrybers = async (endpoint, body) => {
  const config = {
    headers: {
      Authorization: process.env.ADMIN_ACESS,
    }
  };
  const { data } = await api.post(endpoint, body, config);
  return data;
};

export default api;

const axios = require('axios');

const api = axios.create({
  baseURL:'https://api-trybers.vercel.app/api/v1',
});

export const getTrybers = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const postTrybers = async (endpoint, body) => {
  // const config = {
  //   headers: {
  //     Authorization: 'fJtnw*ZazBf&si808e0sb',
  //   }
  // };
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;

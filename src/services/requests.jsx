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
      Authorization: 'fJtnw*ZazBf&si808e0sb8&k67A5Beuy11nzGI5l1fWNEt%&3j',
    }
  };
  const { data } = await api.post(endpoint, body, config);
  return data;
};

export default api;

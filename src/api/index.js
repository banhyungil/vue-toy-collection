import axios from 'axios';

const create = (url, config = {}) => {
  const baseURL = `${import.meta.env.VITE_APP_API_URL}${url}`;
  const instance = axios.create({ baseURL, ...config });

  return instance;
};

export { create };

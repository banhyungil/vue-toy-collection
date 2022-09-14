import axios from 'axios';

const create = (baseURL, config = {}) => {
  const instance = axios.create({ baseURL, ...config });
  return instance;
};

const fandiary = create(`${import.meta.env.VITE_APP_API_URL}/fandiary`);

export { fandiary };

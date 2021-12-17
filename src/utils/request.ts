import axios from 'axios';
import { apiUrl } from '_app/constants/http';

// };

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: apiUrl.baseUrl,
  method: 'GET',
});

instance.interceptors.request.use(
  function (config) {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${apiUrl.token}`,
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    if (response.data.error && +response.data.error !== 0) {
      return Promise.reject(response.data);
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  }
);

export { instance as request };

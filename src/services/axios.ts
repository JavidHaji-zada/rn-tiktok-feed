import axios, {AxiosRequestConfig} from 'axios';

// Add a request interceptor
const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // todo: do something with request error
  },
);

export default AxiosInstance;

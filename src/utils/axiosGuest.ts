import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL! || '' });
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
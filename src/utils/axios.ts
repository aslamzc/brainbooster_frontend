import axios from 'axios';
import Cookies from "js-cookie";

const axiosInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL! || '' });
const accessToken = Cookies.get("accessToken");
// const accessToken = localStorage.getItem('accessToken');
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
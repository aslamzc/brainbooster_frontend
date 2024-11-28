import axios from 'axios';
import Cookies from "js-cookie";

const axiosInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL! || '' });

const accessToken = Cookies.get("accessToken");
if (accessToken) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 404) {
      window.location.href = "/not-found";
    }
    return Promise.reject((error.response && error.response.data) || 'Something went wrong');
  }
);

export default axiosInstance;

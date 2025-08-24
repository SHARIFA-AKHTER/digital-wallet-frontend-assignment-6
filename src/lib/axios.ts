
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1", 
});

axiosInstance.interceptors.request.use((config) => {
  const authUser = localStorage.getItem("authUser");
  if (authUser) {
    const { token } = JSON.parse(authUser);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

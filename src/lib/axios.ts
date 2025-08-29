
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000/api/v1", 
//   withCredentials: true, 
// });

// axiosInstance.interceptors.request.use((config) => {
//     console.log("Header sent:", config.headers.Authorization);
//   const authUser = localStorage.getItem("authUser");
//   if (authUser) {
//     const { token } = JSON.parse(authUser);
//     config.headers.Authorization = `Bearer ${token}`;
//      console.log("🚀 Sending token:", token);
//   }
//   return config;
// });

// export default axiosInstance;


// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true,
// });

// axiosInstance.interceptors.request.use((config) => {
//   const authUser = localStorage.getItem("authUser");
//   if (authUser) {
//     const { token } = JSON.parse(authUser);
//      console.log("🚀 Sending token:", token);
//     // config.headers.Authorization = `Bearer ${token}`;
//     config.headers['authorization'] = `Bearer ${token}`;
//   }
//   return config;
// });

// export default axiosInstance;


import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const authUser = localStorage.getItem("authUser");
  if (authUser) {
    const { accessToken } = JSON.parse(authUser);

    if (config.headers && accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      console.log("🚀 Sending token:", accessToken); 
    }
  }
  return config;
});

export default axiosInstance;


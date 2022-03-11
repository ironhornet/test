import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const API_URL = "https://reqres.in/api/";

const axiosRequest: AxiosInstance = axios.create({
  headers: {
    "content-type": "application/json",
  },
  baseURL: API_URL,
});


// export const api = axios.create({
//   withCredentials: true,
//   headers: {
//     "content-type": "application/json",
//   },
//   baseURL: API_URL,
// });

// api.interceptors.request.use((config) => {
//   if (localStorage.getItem("token") && config.headers) {
//     config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   }
//   return config;
// });


export default axiosRequest;

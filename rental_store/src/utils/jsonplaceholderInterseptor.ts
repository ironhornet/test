import axios, { AxiosInstance } from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

export const jsonplaceholderInterseptor: AxiosInstance = axios.create({
  baseURL: API_URL,
});


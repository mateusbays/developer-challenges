import axios from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({ baseURL });

api.interceptors.request.use(
  (config) => {
    console.log('URL chamada:', config.url);
    const token = Cookies.get("authorization");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

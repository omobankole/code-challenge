import axios from "axios";
export const baseUrl = "https://web-production-d087.up.railway.app/";

export const Url = axios.create({
  baseURL: `${baseUrl}`,
});

Url.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "access"
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

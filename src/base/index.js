import axios from "axios";
export const baseUrl = "https://web-production-d087.up.railway.app/";
let token = localStorage.getItem("access");
console.log(token);

export const Url = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

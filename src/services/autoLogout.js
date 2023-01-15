import jwt from "jsonwebtoken";
import { refresh } from "./api";

export const autoLogout = async () => {
  const token = localStorage.getItem("access");
  if (!token) return false;
  else {
    const data = jwt.decode(token);
    if (!data) return false;
    const newDate = new Date(data.exp) * 1000;

    if (newDate < new Date().getTime()) {
      const rToken = localStorage.getItem("refresh");
      try {
        const response = await refresh(rToken);
        console.log(response);
        localStorage.setItem("access", response.data.access);
      } catch (error) {
        console.log(error);
      }
    } else {
      const newTime = newDate - new Date().getTime();
      return {
        newTime,
        data,
      };
    }
  }
};

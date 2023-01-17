import jwt from "jsonwebtoken";

export const autoLogout = () => {
  const token = localStorage.getItem("access");
  if (!token)
   return false;
  else {
    const data = jwt.decode(token);
    if (!data) return false;
    const newDate = new Date(data.exp) * 1000;
    if (newDate < new Date().getTime()) return false;
    else {
      const newTime = newDate - new Date().getTime();
      return {
        newTime,
        data,
      };
    }
  }
};
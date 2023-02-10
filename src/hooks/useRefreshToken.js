import { Url } from "../base";
import { AUTH_ACTIONS, useAuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";

const useRefreshToken = () => {
  const refresh = async () => {
    try {
      const response = await Url.post("/api/refresh", {
        refresh: Cookies.get("refresh"),
      });
      return response?.data?.access;
    } catch (error) {
      throw new Error("unable to refresh token");
    }
  };

  return refresh;
};

export default useRefreshToken;

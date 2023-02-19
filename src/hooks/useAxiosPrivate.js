import Cookies from "js-cookie";
import { useEffect } from "react";
import { Url } from "../base";
import { AUTH_ACTIONS, useAuthContext } from "../context/AuthContext";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const { state, dispatch } = useAuthContext();
  const userAccess = state?.userAccess;

  const refresh = useRefreshToken();

  useEffect(() => {
    const requestIntercept = Url.interceptors.request.use(
      (config) => {
        if (config?.headers && !config?.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${Cookies.get("access")}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = Url.interceptors.response.use(
      (response) => response,
      async (error) => {
        const previous = error?.config;

        if (error?.response?.status > 400 && !previous?.sent) {
          const newConfig = { ...previous };
          newConfig.sent = true;

          const response = await refresh();
          dispatch({ type: AUTH_ACTIONS.REFRESH, payload: response });
          newConfig.headers["Authorization"] = `Bearer ${response}`;

          return Url(newConfig);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      Url.interceptors.request.eject(requestIntercept);
      Url.interceptors.response.eject(responseIntercept);
    };
  }, [userAccess, refresh]);

  return Url;
};

export default useAxiosPrivate;

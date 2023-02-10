import Cookies from "js-cookie";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useEffectOnce } from "usehooks-ts";
import useRefreshToken from "../hooks/useRefreshToken";

export const AUTH_ACTIONS = {
  AUTH: "AUTH",
  USER: "USER",
  REFRESH: "REFRESH",
  LOGOUT: "LOGOUT",
};

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const refresh = useRefreshToken();

  const reducer = (state, action) => {
    switch (action.type) {
      case AUTH_ACTIONS.AUTH:
        Cookies.set("refresh", action?.payload?.refresh);
        Cookies.set("access", action?.payload?.access);
        return { ...state, userAccess: action.payload };

      case AUTH_ACTIONS.USER:
        localStorage.setItem("user", action.payload);
        return { ...state, user: action.payload };

      case AUTH_ACTIONS.REFRESH:
        Cookies.set("access", action?.payload);
        return {
          ...state,
          userAccess: { ...state.userAccess, access: action.payload },
        };

      case AUTH_ACTIONS.LOGOUT:
        localStorage.clear();
        Cookies.remove("refresh");
        Cookies.remove("access");
        return {};

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, {});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("user")) {
        try {
          let user = JSON.parse(localStorage.getItem("user"));
          dispatch({ type: AUTH_ACTIONS.USER, payload: user });
          const response = await refresh();

          dispatch({ type: AUTH_ACTIONS.REFRESH, payload: response });
        } catch (error) {
          dispatch({ type: AUTH_ACTIONS.LOGOUT });
        }
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <div />;

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { Url } from "../base";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export const useApiSdk = () => {
  const Url = useAxiosPrivate();

  let sdk = {};

  sdk.login = async (payload) => {
    const response = await Url.post("/api/login", payload);
    return response;
  };

  sdk.refresh = async (rToken) => {
    const response = await Url.post("/api/refresh", rToken);
    return response;
  };
  sdk.password = async (data) => {
    const response = await Url.put("/change-password", data);
    return response;
  };
  sdk.user = async () => {
    const response = await Url.get("/user");
    return response;
  };
  sdk.question = async () => {
    const response = await Url.get("/questions");
    return response;
  };
  sdk.notificationApi = async () => {
    const response = await Url.get("/notifications/ATC");
    return response;
  };
  sdk.deleteNot = async () => {
    const response = await Url.delete("/notifications/ATC");
    return response;
  };
  sdk.solves = async (id) => {
    const response = await Url.get(`/questions/ATC/${id}/solves`);
    return response;
  };
  sdk.answer = async (id, payload) => {
    const response = await Url.post(`/answers/ATC/${id}`, payload);
    return response;
  };

  return sdk;
};

export const login = async (payload) => {
  const response = await Url.post("/api/login", payload);
  return response;
};

export const refresh = async (rToken) => {
  const response = await Url.post("/api/login", rToken);
  return response;
};
export const password = async (data) => {
  const response = await Url.put("/change-password", data);
  return response;
};
export const user = async () => {
  const response = await Url.get("/user");
  return response;
};
export const question = async () => {
  const response = await Url.get("/questions");
  return response;
};
export const notificationApi = async () => {
  const response = await Url.get("/notifications/ATC");
  return response;
};
export const deleteNot = async () => {
  const response = await Url.delete("/notifications/ATC");
  return response;
};
export const solves = async (id) => {
  const response = await Url.get(`/questions/ATC/${id}/solves`);
  return response;
};
export const answer = async (id, payload) => {
  const response = await Url.post(`/answers/ATC/${id}`, payload);
  return response;
};

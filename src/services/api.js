import { Url } from "../base";

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

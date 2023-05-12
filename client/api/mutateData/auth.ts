import { postData } from "..";
import { useMutation } from "@tanstack/vue-query";

export const registerUser = async (data: Object) => {
  return await postData("/auth/register", data);
};
export const loginUser = async (data: Object) => {
  return await postData("/auth/login", data);
};

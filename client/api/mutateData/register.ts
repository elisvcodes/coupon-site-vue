import { postData } from "..";
import { useMutation } from "@tanstack/vue-query";

const registerUser = async (data: Object) => {
  return await postData("/auth/register", data);
};

export const useRegisterUser = () => {
  return useMutation({ mutationFn: registerUser });
};

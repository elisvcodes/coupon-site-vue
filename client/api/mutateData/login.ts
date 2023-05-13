import { postData } from "..";
import { useMutation } from "@tanstack/vue-query";

const loginUser = async (data: Object) => {
  return await postData("/auth/login", data);
};

export const useLoginUser = () => {
  return useMutation({ mutationFn: loginUser });
};

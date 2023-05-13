import { postData } from "..";
import { useMutation } from "@tanstack/vue-query";

const loginUser = async (data: Record<string, unknown>) => {
  return await postData("/auth/login", data);
};

export const useLoginUser = () => {
  return useMutation({ mutationFn: loginUser });
};

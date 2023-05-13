import { postData } from "..";
import { useMutation } from "@tanstack/vue-query";

const createCoupon = async (data: Record<string, unknown>) => {
  return await postData("/coupons/create", data);
};

export const useCreateCoupon = () => {
  return useMutation({ mutationFn: createCoupon });
};

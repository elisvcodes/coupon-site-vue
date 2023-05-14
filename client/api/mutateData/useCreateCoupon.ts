import { postData } from "..";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

const createCoupon = async (data: Record<string, unknown>) => {
  return await postData("/coupons/create", data);
};

export const useCreateCoupon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCoupon,
  });
};

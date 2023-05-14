import { putData } from "..";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

const redeemCoupon = async (data: Record<string, unknown>) => {
  return await putData("/coupons/redeem", data);
};

export const useRedeemCoupon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: redeemCoupon,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allCoupons"] });
    },
  });
};

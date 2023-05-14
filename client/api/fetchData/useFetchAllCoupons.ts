import { useQuery } from "@tanstack/vue-query";
import { fetchData } from "..";

const fetchCoupons = async () => {
  return await fetchData("/coupons/all");
};

export const useFetchAllCoupons = () => {
  return useQuery({
    queryKey: ["allCoupons"],
    queryFn: fetchCoupons,
  });
};

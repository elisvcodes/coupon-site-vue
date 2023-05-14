import { fetchData } from "..";

export const searchBrands = async (query: string) => {
  return await fetchData(`/coupons/search/${query}`);
};

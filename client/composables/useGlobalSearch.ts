import { UseQueryReturnType, useQuery } from "@tanstack/vue-query";
import { AxiosResponse } from "axios";
import { ref, provide, inject, Ref } from "vue";
import { searchBrands } from "~/api/fetchData/searchBrands";

const searchSymbol = Symbol();

interface GlobalSearch {
  searchQueryActions: UseQueryReturnType<AxiosResponse<any, any>, unknown>;
  query: Ref<string>;
}

export const useProviderGloablSearch = () => {
  let searchQueryActions: UseQueryReturnType<
    AxiosResponse<any, any>,
    unknown
  > | null = null;

  const query: Ref<string> = ref("");

  searchQueryActions = useQuery<AxiosResponse<any, any>, unknown>({
    queryKey: ["search", query],
    queryFn: () => searchBrands(query.value),
    refetchOnWindowFocus: false,
    enabled: false,
    retry: false,
  });

  provide(searchSymbol, { searchQueryActions, query });

  return { searchQueryActions, query };
};

export const useGlobalSearch = () => {
  const search = inject<GlobalSearch | null>(searchSymbol);
  if (!search) throw new Error("No search provided!!!");

  return search;
};

import type { GetAccountTxsResponse200 } from "@/.api/apis/chainbase/types";
import { filtersToString } from "@/lib/filters";
import type { GetAccountTxsFilters } from "./useTransactionsFilters";

export const transactionsApi = {
  getTransactions: (
    address: string,
    filters: GetAccountTxsFilters,
  ): Promise<{
    error: Error;
    data: GetAccountTxsResponse200;
  }> =>
    fetch(
      `/api/transactions?address=${address}&${filtersToString(filters)}`,
    ).then((response) => response.json()),
};

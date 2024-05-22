import type { GetAccountTxsMetadataParam } from "@/.api/apis/chainbase/types";
import { filtersToString } from "@/lib/filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export type GetAccountTxsFilters = Pick<
  GetAccountTxsMetadataParam,
  "from_block" | "to_block" | "from_timestamp" | "end_timestamp" | "page"
>;

const searchParamsToFilters = (
  searchParams: URLSearchParams,
): GetAccountTxsFilters => {
  const fromTimestamp = searchParams.get("from_timestamp");
  const endTimestamp = searchParams.get("end_timestamp");
  const fromBlock = searchParams.get("from_block");
  const toBlock = searchParams.get("to_block");
  const page = searchParams.get("page");

  return {
    from_block: fromBlock ?? undefined,
    to_block: toBlock ?? undefined,
    from_timestamp: fromTimestamp ? +fromTimestamp : undefined,
    end_timestamp: endTimestamp ? +endTimestamp : undefined,
    page: page ? +page : 1,
  };
};

export type TransactionsFiltersState = {
  setFromBlock: (fromBlock: GetAccountTxsFilters["from_block"]) => void;
  setToBlock: (toBlock: GetAccountTxsFilters["to_block"]) => void;
  setFromDate: (fromDate: GetAccountTxsFilters["from_timestamp"]) => void;
  setToDate: (toDate: GetAccountTxsFilters["end_timestamp"]) => void;
  setPage: (page: GetAccountTxsFilters["page"]) => void;
  filters: GetAccountTxsFilters;
};

export const useTransactionsFilters = (): TransactionsFiltersState => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => searchParamsToFilters(searchParams),
    [searchParams],
  );

  const setFilters = (filters: GetAccountTxsFilters) =>
    router.push(`${pathName}?${filtersToString(filters)}`);

  const setFromBlock = (fromBlock: GetAccountTxsFilters["from_block"]) => {
    setFilters({
      ...filters,
      page: 1,
      from_block: fromBlock,
    });
  };
  const setToBlock = (toBlock: GetAccountTxsFilters["to_block"]) =>
    setFilters({
      ...filters,
      page: 1,
      to_block: toBlock,
    });

  const setFromDate = (fromDate: GetAccountTxsFilters["from_timestamp"]) =>
    setFilters({
      ...filters,
      page: 1,
      from_timestamp: fromDate,
    });

  const setToDate = (toDate: GetAccountTxsFilters["end_timestamp"]) =>
    setFilters({
      ...filters,
      page: 1,
      end_timestamp: toDate,
    });

  const setPage = (page: GetAccountTxsFilters["page"]) =>
    setFilters({
      ...filters,
      page,
    });

  return {
    setFromBlock,
    setToBlock,
    setFromDate,
    setToDate,
    setPage,
    filters,
  };
};

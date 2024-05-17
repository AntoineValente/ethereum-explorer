import type { GetAccountTxsMetadataParam } from "@/.api/apis/chainbase/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export type GetAccountTxsFilters = Pick<
	GetAccountTxsMetadataParam,
	"from_block" | "to_block" | "from_timestamp" | "end_timestamp" | "page"
>;

export const filtersToString = (filters: GetAccountTxsFilters): string => {
	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(filters) as [string, string][]) {
		if (value) params.append(key, value);
	}

	return params.toString();
};

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

export const useFilters = () => {
	const router = useRouter();
	const pathName = usePathname();
	const searchParams = useSearchParams();

	const filters = useMemo(
		() => searchParamsToFilters(searchParams),
		[searchParams],
	);

	const setFromBlock = (fromBlock: string | undefined) => {
		router.push(
			`${pathName}?${filtersToString({
				...filters,
				page: 1,
				from_block: fromBlock,
			})}`,
		);
	};
	const setToBlock = (toBlock: string | undefined) =>
		router.push(
			`${pathName}?${filtersToString({
				...filters,
				page: 1,
				to_block: toBlock,
			})}`,
		);

	const setFromDate = (fromDate: number | undefined) =>
		router.push(
			`${pathName}?${filtersToString({
				...filters,
				page: 1,
				from_timestamp: fromDate,
			})}`,
		);

	const setToDate = (toDate: number | undefined) =>
		router.push(
			`${pathName}?${filtersToString({
				...filters,
				page: 1,
				end_timestamp: toDate,
			})}`,
		);

	const setPage = (page: number) =>
		router.push(
			`${pathName}?${filtersToString({
				...filters,
				page,
			})}`,
		);

	return {
		setFromBlock,
		setToBlock,
		setFromDate,
		setToDate,
		setPage,
		filters,
	};
};

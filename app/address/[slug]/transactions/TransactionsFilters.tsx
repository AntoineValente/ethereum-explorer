import type { FC } from "react";
import { TransactionsBlockInput } from "./TransactionsBlockInput";
import { TransactionsDatePicker } from "./TransactionsDateInput";
import type { TransactionsFiltersState } from "./useTransactionsFilters";

type Props = Omit<TransactionsFiltersState, "setPage">;

export const TransactionsFilters: FC<Props> = ({
	filters,
	setFromBlock,
	setToBlock,
	setFromDate,
	setToDate,
}) => (
	<div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 px-1">
		<TransactionsBlockInput
			label="From block"
			initialValue={filters.from_block}
			onClear={() => setFromBlock(undefined)}
			onEnter={(value) => setFromBlock(value)}
		/>
		<TransactionsBlockInput
			label="To block"
			initialValue={filters.to_block}
			onClear={() => setToBlock(undefined)}
			onEnter={(value) => setToBlock(value)}
		/>
		<TransactionsDatePicker
			label="From date"
			date={filters.from_timestamp}
			setDate={setFromDate}
		/>
		<TransactionsDatePicker
			label="To date"
			date={filters.end_timestamp}
			setDate={setToDate}
		/>
	</div>
);

import type { GetAccountTxsResponse200 } from "@/.api/apis/chainbase/types";
import { Badge } from "@/components/ui/badge";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { createMiddleEllipsis } from "@/lib/address";
import { getAmountWithDecimals } from "@/lib/amount";
import {
	type GetAccountTxsFilters,
	filtersToString,
	useFilters,
} from "@/lib/filter";
import { format } from "date-fns";
import type { FetchResponse } from "openapi-fetch";
import { type FC, useEffect, useState } from "react";
import type { AddressProps } from "../types";

const TransactionBlockInput: FC<{
	onEnter: (value: string) => void;
	label: string;
}> = ({ onEnter, label }) => {
	const [value, setValue] = useState("");

	return (
		<Input
			className="flex-1"
			placeholder={label}
			value={value}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					onEnter(value);
				}
			}}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};

const TransactionDatePicker: FC<{
	label: string;
	setDate: (date: number | undefined) => void;
}> = ({ label, setDate }) => {
	const [date, setFieldDate] = useState<Date | undefined>();

	return (
		<div className="flex-1">
			<DatePicker
				className="w-full"
				label={label}
				date={date}
				setDate={(date) => {
					setFieldDate(date);
					setDate(date?.getTime());
				}}
			/>
		</div>
	);
};

const getTransactions = (
	address: string,
	filters: GetAccountTxsFilters,
): Promise<{ error: Record<string, string>; data: GetAccountTxsResponse200 }> =>
	fetch(
		`/api/transactions?address=${address}&${filtersToString(filters)}`,
	).then((response) => response.json());

export const Transactions: FC<AddressProps> = ({ address }) => {
	const [transactions, setTransactions] = useState<
		GetAccountTxsResponse200["data"]
	>([]);
	const { filters, setFromBlock, setToBlock, setFromDate, setToDate } =
		useFilters();

	useEffect(() => {
		getTransactions(address, filters).then((response) => {
			setTransactions(response.data?.data ?? []);
		});
	}, [filters, address]);

	console.log({ transactions });

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-row space-x-2">
				<TransactionBlockInput
					label="From block"
					onEnter={(value) => setFromBlock(value)}
				/>
				<TransactionBlockInput
					label="To block"
					onEnter={(value) => setToBlock(value)}
				/>
				<TransactionDatePicker label="From date" setDate={setFromDate} />
				<TransactionDatePicker label="To date" setDate={setToDate} />
			</div>

			<div className="flex flex-row space-x-2">
				{filters.from_block && (
					<Badge variant="secondary" onDelete={() => setFromBlock(undefined)}>
						From block {filters.from_block}
					</Badge>
				)}
				{filters.to_block && (
					<Badge variant="secondary" onDelete={() => setToBlock(undefined)}>
						To block {filters.to_block}
					</Badge>
				)}
				{filters.from_timestamp && (
					<Badge variant="secondary" onDelete={() => setFromDate(undefined)}>
						From date {format(filters.from_timestamp, "PPP")}
					</Badge>
				)}
				{filters.end_timestamp && (
					<Badge variant="secondary" onDelete={() => setToDate(undefined)}>
						To date {format(filters.end_timestamp, "PPP")}
					</Badge>
				)}
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Hash</TableHead>
						<TableHead>Block</TableHead>
						<TableHead>Date</TableHead>
						<TableHead>From</TableHead>
						<TableHead>To</TableHead>
						<TableHead className="text-right">Amount</TableHead>
						<TableHead>In/Out</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{transactions.map((transaction) => (
						<TableRow key={transaction.transaction_hash}>
							<TableCell>
								{`${transaction.transaction_hash.slice(0, 11)}...`}
							</TableCell>
							<TableCell>{transaction.block_number}</TableCell>
							<TableCell>
								{format(transaction.block_timestamp, "PPP")}
							</TableCell>
							<TableCell>
								{createMiddleEllipsis(transaction.from_address)}
							</TableCell>
							<TableCell>
								{createMiddleEllipsis(transaction.to_address)}
							</TableCell>
							<TableCell className="text-right">{`${getAmountWithDecimals(
								transaction.value,
							)} ETH`}</TableCell>
							<TableCell>
								{transaction.from_address.toLowerCase() ===
								address.toLowerCase() ? (
									<Badge variant="destructive">Out</Badge>
								) : (
									<Badge>In</Badge>
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

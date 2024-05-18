"use client";

import type { GetAccountTxsResponse200 } from "@/.api/apis/chainbase/types";
import { Badge } from "@/components/ui/badge";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem as PaginationItemComponent,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { createMiddleEllipsis } from "@/lib/address";
import { getAmountWithDecimals } from "@/lib/amount";
import { useBreakpoint } from "@/lib/breakpoint";
import {
	type GetAccountTxsFilters,
	filtersToString,
	useFilters,
} from "@/lib/filter";
import { format } from "date-fns";
import { type FC, type PropsWithChildren, useEffect, useState } from "react";
import type { AddressProps } from "./types";

const TransactionBlockInput: FC<{
	onEnter: (value: string) => void;
	onClear: VoidFunction;
	initialValue: string | undefined;
	label: string;
}> = ({ onEnter, onClear, initialValue, label }) => {
	const [value, setValue] = useState<string>(initialValue || "");

	return (
		<Input
			type="search"
			className="flex-1"
			placeholder={label}
			value={value}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					onEnter(value);
				}
			}}
			onChange={(e) => {
				if (!e.currentTarget.value) onClear();
				setValue(e.target.value);
			}}
		/>
	);
};

const TransactionDatePicker: FC<{
	label: string;
	date: number | undefined;
	setDate: (date: number | undefined) => void;
}> = ({ label, date, setDate }) => {
	return (
		<div className="flex-1">
			<DatePicker
				className="w-full"
				label={label}
				date={date ? new Date(date) : undefined}
				setDate={(date) => {
					setDate(date?.getTime());
				}}
				onClear={() => setDate(undefined)}
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
	const [transactionsResponse, setTransactionsResponse] =
		useState<GetAccountTxsResponse200 | null>(null);
	const [error, setError] = useState<Record<string, string> | null>(null);
	const isLoading = !transactionsResponse && !error;
	const { filters, setFromBlock, setToBlock, setFromDate, setToDate, setPage } =
		useFilters();

	useEffect(() => {
		getTransactions(address, filters).then((response) => {
			if (response.error) {
				setTransactionsResponse(null);
				setError(response.error);
			} else {
				setTransactionsResponse(response.data);
				setError(null);
			}
		});
	}, [filters, address]);

	const transactions = transactionsResponse?.data ?? [];

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 px-1">
				<TransactionBlockInput
					label="From block"
					initialValue={filters.from_block}
					onClear={() => setFromBlock(undefined)}
					onEnter={(value) => setFromBlock(value)}
				/>
				<TransactionBlockInput
					label="To block"
					initialValue={filters.to_block}
					onClear={() => setToBlock(undefined)}
					onEnter={(value) => setToBlock(value)}
				/>
				<TransactionDatePicker
					label="From date"
					date={filters.from_timestamp}
					setDate={setFromDate}
				/>
				<TransactionDatePicker
					label="To date"
					date={filters.end_timestamp}
					setDate={setToDate}
				/>
			</div>

			{error ? (
				<span className="self-center pt-14">
					An error occurred - <i>{error.message}</i>
				</span>
			) : !isLoading && !transactions.length ? (
				<span className="self-center pt-14">No activity found</span>
			) : (
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
			)}

			{transactionsResponse?.count ? (
				<TransactionsPagination
					count={transactionsResponse?.count}
					currentPage={filters.page}
					onPressPage={(page) => setPage(page)}
				/>
			) : undefined}
		</div>
	);
};

const PaginationItem: FC<PropsWithChildren> = ({ children }) => (
	<PaginationItemComponent className="cursor-pointer">
		{children}
	</PaginationItemComponent>
);

const TransactionsPagination: FC<{
	count: number;
	currentPage: number;
	onPressPage: (page: number) => void;
}> = ({ count, currentPage, onPressPage }) => {
	const totalPages = Math.ceil(count / 15);

	const isMdScreen = useBreakpoint("md");

	const onPrevious = () => onPressPage(currentPage === 1 ? 1 : currentPage + 1);
	const onNext = () =>
		onPressPage(currentPage === totalPages ? currentPage : currentPage + 1);

	if (totalPages <= 3) {
		return (
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious onClick={onPrevious} />
					</PaginationItem>

					{isMdScreen &&
						Array.from({ length: totalPages }, (_, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: This is a pagination component, the key is the page number (= static)
							<PaginationItem key={i}>
								<PaginationLink
									isActive={i + 1 === currentPage}
									onClick={() => onPressPage(i + 1)}
								>
									{i + 1}
								</PaginationLink>
							</PaginationItem>
						))}

					<PaginationItem>
						<PaginationNext onClick={onNext} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		);
	}
	if (totalPages > 3 && currentPage <= 2) {
		return (
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious onClick={onPrevious} />
					</PaginationItem>

					{isMdScreen &&
						Array.from({ length: 3 }, (_, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: This is a pagination component, the key is the page number (so static)
							<PaginationItem key={i}>
								<PaginationLink
									isActive={i + 1 === currentPage}
									onClick={() => onPressPage(i + 1)}
								>
									{i + 1}
								</PaginationLink>
							</PaginationItem>
						))}

					{isMdScreen && (
						<>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink onClick={() => onPressPage(totalPages)}>
									{totalPages}
								</PaginationLink>
							</PaginationItem>
						</>
					)}
					<PaginationItem>
						<PaginationNext onClick={onNext} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		);
	}

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious onClick={onPrevious} />
				</PaginationItem>

				{currentPage >= 3 && isMdScreen && (
					<>
						<PaginationItem>
							<PaginationLink onClick={() => onPressPage(1)}>1</PaginationLink>
						</PaginationItem>

						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					</>
				)}

				{isMdScreen && (
					<>
						<PaginationItem>
							<PaginationLink onClick={() => onPressPage(currentPage - 1)}>
								{currentPage - 1}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink isActive onClick={() => onPressPage(currentPage)}>
								{currentPage}
							</PaginationLink>
						</PaginationItem>
					</>
				)}
				{currentPage < totalPages && isMdScreen && (
					<PaginationItem>
						<PaginationLink onClick={() => onPressPage(currentPage + 1)}>
							{currentPage + 1}
						</PaginationLink>
					</PaginationItem>
				)}

				{currentPage < totalPages - 3 && isMdScreen && (
					<>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink onClick={() => onPressPage(totalPages)}>
								{totalPages}
							</PaginationLink>
						</PaginationItem>
					</>
				)}
				<PaginationItem>
					<PaginationNext onClick={onNext} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

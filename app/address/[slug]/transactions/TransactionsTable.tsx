import type { GetAccountTxsResponse200 } from "@/.api/apis/chainbase/types";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getAmountWithDecimals } from "@/lib/amount";
import { createMiddleEllipsis } from "@/lib/text";
import { format } from "date-fns";
import type { FC } from "react";

type Props = {
	address: string;
	transactions: GetAccountTxsResponse200["data"];
};

export const TransactionsTable: FC<Props> = ({ transactions, address }) => (
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
					<TableCell>{format(transaction.block_timestamp, "PPP")}</TableCell>
					<TableCell>
						{createMiddleEllipsis(transaction.from_address)}
					</TableCell>
					<TableCell>{createMiddleEllipsis(transaction.to_address)}</TableCell>
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
);

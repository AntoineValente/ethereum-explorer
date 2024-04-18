import { Input } from "@/components/ui/input";
import type { FC } from "react";
import type { AddressProps } from "../types";

export const Transactions: FC<AddressProps> = ({ address }) => {
	return (
		<div className="flex flex-row space-x-2">
			<Input placeholder="From block" />
			<Input placeholder="To block" />
		</div>
	);
};

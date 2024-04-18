import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import type { FC } from "react";
import type { AddressProps } from "../types";

export const Transactions: FC<AddressProps> = ({ address }) => {
	return (
		<div className="flex flex-row space-x-2">
			<Input className="flex-1" placeholder="From block" />
			<Input className="flex-1" placeholder="To block" />
			<DatePicker className="flex-1" />
			<DatePicker className="flex-1" />
		</div>
	);
};

import { DatePicker } from "@/components/ui/date-picker";
import type { FC } from "react";

type Props = {
	label: string;
	date: number | undefined;
	setDate: (date: number | undefined) => void;
};

export const TransactionsDatePicker: FC<Props> = ({ label, date, setDate }) => {
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

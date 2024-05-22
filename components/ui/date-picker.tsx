"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon, X as XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/style";

type Props = {
	className?: string;
	label: string;
	date: Date | undefined;
	setDate: (date: Date | undefined) => void;
	onClear: VoidFunction;
};

export const DatePicker: React.FC<Props> = ({
	date,
	setDate,
	onClear,
	className,
	label,
}) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"justify-start text-left font-normal",
						!date && "text-muted-foreground",
						className,
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
					{date ? (
						format(date, "PPP")
					) : (
						<span className="text-neutral-500 dark:text-neutral-400">
							{label}
						</span>
					)}

					{date && (
						<XIcon
							onClick={(e) => {
								e.stopPropagation();
								onClear();
							}}
							className="ml-auto h-4 w-4 text-white"
						/>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
};

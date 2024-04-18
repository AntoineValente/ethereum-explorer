"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Props = {
	className?: string;
};

export const DatePicker: React.FC<Props> = ({ className, ...rest }) => {
	const [date, setDate] = React.useState<Date>();

	return (
		<Popover>
			<PopoverTrigger className={className} asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[280px] justify-start text-left font-normal",
						!date && "text-muted-foreground",
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
					{date ? (
						format(date, "PPP")
					) : (
						<span className="text-neutral-500 dark:text-neutral-400">
							Pick a date
						</span>
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

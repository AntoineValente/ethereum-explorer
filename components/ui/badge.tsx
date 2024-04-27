import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";

const badgeVariants = cva(
	"inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",
				secondary:
					"border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
				destructive:
					"border-transparent bg-red-500 text-neutral-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80",
				outline: "text-neutral-950 dark:text-neutral-50",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

interface InteractiveProps {
	onDelete?: VoidFunction;
}

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		InteractiveProps,
		VariantProps<typeof badgeVariants> {}

function Badge({
	className,
	variant,
	onDelete,
	children,
	...props
}: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props}>
			{children}
			{onDelete && (
				<XIcon
					onClick={onDelete}
					className="ml-1 h-4 w-4 cursor-pointer text-neutral-500 dark:text-neutral-400"
				/>
			)}
		</div>
	);
}

export { Badge, badgeVariants };

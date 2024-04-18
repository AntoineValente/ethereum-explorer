import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FC, PropsWithChildren } from "react";

type HeaderCardProps = {
	title: string;
};

export const HeaderCard: FC<PropsWithChildren<HeaderCardProps>> = ({
	title,
	children,
}) => (
	<Card className="flex-1">
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>

		<CardContent>
			<div className="flex flex-col space-y-2">{children}</div>
		</CardContent>
	</Card>
);
type HeaderCardSectionCard = {
	title: string;
};

export const HeaderCardSection: FC<PropsWithChildren<HeaderCardSectionCard>> =
	({ title, children }) => (
		<div>
			<p className="dark:text-neutral-400 text-neutral-500">{title}</p>
			{children}
		</div>
	);

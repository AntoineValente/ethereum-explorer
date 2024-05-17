"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

import type { FC, ReactNode } from "react";
import type { ActivitySlug, AddressPageProps, AddressProps } from "../types";
import { Transactions } from "./transactions";

type Props = {
	address: string;
	activitySlug: ActivitySlug | undefined;
};

const activitiesDict: Record<
	ActivitySlug,
	{
		label: string;
		Component: FC<AddressProps>;
	}
> = {
	transactions: {
		label: "Transactions",
		Component: Transactions,
	},
	internal: {
		label: "Internal transactions",
		Component: Transactions,
	},
	erc20: {
		label: "Transfers ERC20",
		Component: Transactions,
	},
	nft: {
		label: "Transfers NFT",
		Component: Transactions,
	},
};

export const Activity: FC<Props> = ({ address, activitySlug }) => {
	const router = useRouter();

	const onValueChange = (value: string) =>
		router.push(`/address/${address}/${value}`);

	return (
		<Tabs
			defaultValue="transactions"
			value={activitySlug}
			onValueChange={onValueChange}
		>
			<TabsList className="max-w-full overflow-x-auto">
				{Object.entries(activitiesDict).map(([slug, { label }]) => (
					<TabsTrigger key={slug} value={slug}>
						{label}
					</TabsTrigger>
				))}
			</TabsList>

			{Object.entries(activitiesDict).map(([slug, { Component }]) => (
				<TabsContent key={slug} value={slug} className="mt-2 py-1">
					<Component address={address} />
				</TabsContent>
			))}
		</Tabs>
	);
};

import { ChainId, chainbaseSdk } from "@/api";
import { Badge } from "@/components/ui/badge";
import type { FC } from "react";
import { HeaderCard, HeaderCardSection } from "./header-card";

const getData = async (address: string) => {
	const transactionsResponse = await chainbaseSdk.get("/v1/account/txs", {
		params: {
			query: {
				chain_id: ChainId.ETHEREUM,
				address,
				limit: 1,
			},
		},
	});

	return {
		transactionsCount: transactionsResponse.data?.count,
		lastTransactionHash:
			transactionsResponse.data?.data?.[0]?.transaction_hash ?? "None",
	};
};

type Props = {
	address: string;
};

export const Informations: FC<Props> = async ({ address }) => {
	const result = await getData(address);

	return (
		<HeaderCard title="Informations">
			<HeaderCardSection title="Last transaction sent">
				<p className="truncate">{result.lastTransactionHash}</p>
			</HeaderCardSection>

			<HeaderCardSection title="Transaction count">
				<p>{result.transactionsCount}</p>
			</HeaderCardSection>
		</HeaderCard>
	);
};

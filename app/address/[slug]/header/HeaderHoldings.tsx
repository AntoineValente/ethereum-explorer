import { ChainId, chainbaseSdk } from "@/api";
import { getAmountWithDecimals } from "@/lib/amount";

import type { FC } from "react";
import { HeaderCard, HeaderCardSection } from "./HeaderCard";

const getData = async (address: string) => {
	const nativeBalanceResponse = await chainbaseSdk.get("/v1/account/balance", {
		params: {
			query: {
				chain_id: ChainId.ETHEREUM,
				address,
			},
		},
	});

	const tokenBalancesResponse = await chainbaseSdk.get("/v1/account/tokens", {
		params: {
			query: { chain_id: ChainId.ETHEREUM, address, limit: 1 },
		},
	});

	const nftBalancesResponse = await chainbaseSdk.get("/v1/account/nfts", {
		params: {
			query: { chain_id: ChainId.ETHEREUM, address, limit: 1 },
		},
	});

	return {
		nativeBalance: nativeBalanceResponse.data?.data,
		tokenCount: tokenBalancesResponse.data?.count,
		nftCount: nftBalancesResponse.data?.count,
	};
};

type Props = {
	address: string;
};

export const HeaderHoldings: FC<Props> = async ({ address }) => {
	const result = await getData(address);

	return (
		<HeaderCard title="Holdings">
			<HeaderCardSection title="ETH Balance">
				<p>{getAmountWithDecimals(result.nativeBalance)} ETH</p>
			</HeaderCardSection>
			<HeaderCardSection title="Token holdings (ERC20)">
				<p>{result.tokenCount}</p>
			</HeaderCardSection>
			<HeaderCardSection title="NFT holdings">
				<p>{result.nftCount}</p>
			</HeaderCardSection>
		</HeaderCard>
	);
};

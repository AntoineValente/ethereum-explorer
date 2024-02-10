import { FC } from 'react';

import { Card } from '@/app/_components/card';
import { H1, PLarge, PMedium } from '@/app/_components/typo';
import { EHTEREUM_DECIMALS } from '@/app/_consts';
import { getAmountWithDecimals } from '@/app/_utils/amount';
import { ChainId, chainbaseClient } from '@/app/api/chainbase-client';

const getData = async (address: string) => {
  const nativeBalanceResponse = await chainbaseClient.getNativeBalance({
    chain_id: ChainId.EHTEREUM,
    address,
  });

  const tokenBalancesResponse = await chainbaseClient.getTokenBalances({
    chain_id: ChainId.EHTEREUM,
    address,
    limit: 1,
  });

  const nftBalancesResponse = await chainbaseClient.getNFTBalances({
    chain_id: ChainId.EHTEREUM,
    address,
    limit: 1,
  });

  return {
    nativeBalance: nativeBalanceResponse.data,
    tokenCount: tokenBalancesResponse.count,
    nftCount: nftBalancesResponse.count,
  };
};

type Props = {
  address: string;
};

const Holdings: FC<Props> = async ({ address }) => {
  const result = await getData(address);

  return (
    <Card.Root className="flex-1">
      <Card.Title>Holdings</Card.Title>

      <Card.Section>
        <>
          <Card.SectionTitle>ETH Balance</Card.SectionTitle>
          <PMedium className="font-bold">
            {getAmountWithDecimals(result.nativeBalance, EHTEREUM_DECIMALS)} ETH
          </PMedium>
        </>
      </Card.Section>

      <Card.Section>
        <>
          <Card.SectionTitle>Token holdings (ERC20)</Card.SectionTitle>
          <PMedium className="font-normal underline">
            {result.tokenCount}
          </PMedium>
        </>
      </Card.Section>

      <Card.Section>
        <>
          <Card.SectionTitle>NFT holdings</Card.SectionTitle>
          <PMedium className="font-normal underline">{result.nftCount}</PMedium>
        </>
      </Card.Section>
    </Card.Root>
  );
};

export default Holdings;

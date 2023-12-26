import { FC } from 'react';

import { ChainId, chainbaseClient } from '@/app/_api/chainbase-client';
import Badge from '@/app/_components/badge';
import { Card } from '@/app/_components/card';
import { H1, PLarge, PMedium } from '@/app/_components/typo';
import { EHTEREUM_DECIMALS } from '@/app/_consts';
import { createMiddleEllipsis } from '@/app/_utils/text';

const getData = async (address: string) => {
  const transactionsResponse = await chainbaseClient.getTransactions({
    chain_id: ChainId.EHTEREUM,
    address,
    limit: 1,
  });

  return {
    transactionsCount: transactionsResponse.count,
    lastTransactionHash: transactionsResponse.data[0].transaction_hash,
  };
};

type Props = {
  address: string;
};

const Informations: FC<Props> = async ({ address }) => {
  const result = await getData(address);

  return (
    <Card.Root className="flex-1">
      <Card.Title>Informations</Card.Title>

      <Card.Section>
        <div className="flex flex-col gap-1">
          <Card.SectionTitle>Tags</Card.SectionTitle>
          <div className="flex flex-row gap-1">
            <Badge>Vitalik</Badge>
            <Badge>Vitalik</Badge>
            <Badge>Vitalik</Badge>
            <Badge>Vitalik</Badge>
          </div>
        </div>
      </Card.Section>

      <Card.Section>
        <>
          <Card.SectionTitle>Number of transactions</Card.SectionTitle>
          <PMedium className="font-normal underline">
            {result.transactionsCount}
          </PMedium>
        </>
      </Card.Section>

      <Card.Section>
        <>
          <Card.SectionTitle>Last transaction</Card.SectionTitle>
          <PMedium className="font-normal underline">
            {createMiddleEllipsis(result.lastTransactionHash, 22, 22)}
          </PMedium>
        </>
      </Card.Section>
    </Card.Root>
  );
};

export default Informations;

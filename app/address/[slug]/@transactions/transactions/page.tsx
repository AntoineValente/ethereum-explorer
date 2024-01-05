import { FC } from 'react';

import { ChainId, chainbaseClient } from '@/app/api/chainbase-client';
import { SlugProps } from '@/app/_consts/props';

import TransactionsTable from './transactions-table';

const TRANSACTIONS_LIMIT = 10;

const getData = async (address: string) => {
  const transactions = await chainbaseClient.getTransactions({
    chain_id: ChainId.EHTEREUM,
    address,
    limit: TRANSACTIONS_LIMIT,
  });

  return transactions;
};

const Transactions: FC<SlugProps> = async ({ params: { slug: address } }) => {
  const transactions = await getData(address);

  return (
    <TransactionsTable
      transactions={transactions}
      address={address}
      limit={TRANSACTIONS_LIMIT}
    />
  );
};

export default Transactions;

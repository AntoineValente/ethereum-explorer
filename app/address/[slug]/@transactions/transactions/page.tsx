import { FC } from 'react';

import { ChainId, chainbaseClient } from '@/app/_api/chainbase-client';
import { SlugProps } from '@/app/_consts/props';

import TransactionsTable from './transactions-table';

const getData = async (address: string) => {
  const transactions = await chainbaseClient.getTransactions({
    chain_id: ChainId.EHTEREUM,
    address,
  });

  return transactions;
};

const Transactions: FC<SlugProps> = async ({ params: { slug: address } }) => {
  const transactions = await getData(address);

  return (
    <TransactionsTable transactions={transactions.data} address={address} />
  );
};

export default Transactions;

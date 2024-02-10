'use client';

import { FC, useEffect } from 'react';

import Badge from '@/app/_components/badge';
import { DatePickerDemo } from '@/app/_components/date-picker';
import { Filters } from '@/app/_components/filters';
import { TextInput } from '@/app/_components/input';
import { Table } from '@/app/_components/table';
import { EHTEREUM_DECIMALS } from '@/app/_consts';
import { useFetch } from '@/app/_hooks/useFetch';
import { useTransactions } from '@/app/_hooks/useTransactions';
import { getAmountWithDecimals } from '@/app/_utils/amount';
import { buildSearchParams } from '@/app/_utils/query';
import { createMiddleEllipsis } from '@/app/_utils/text';
import { chainbaseClient } from '@/app/api/chainbase-client';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

type TransactionResponse = Awaited<
  ReturnType<typeof chainbaseClient.getTransactions>
>;

type Props = {
  transactions: TransactionResponse;
  limit: number;
  address: string;
};

const TransactionsTable: FC<Props> = ({ transactions, address, limit }) => {
  const { setParams, transactionsParameters } = useTransactions();

  const { data: transactionsResult } = useFetch<TransactionResponse>(
    `/api/transactions?address=${address}&${buildSearchParams(
      transactionsParameters,
    )}`,
  );

  const transactionsList = transactionsResult?.data ?? [];

  return (
    <div className="flex flex-col space-y-7">
      <Filters.Root>
        <TextInput
          defaultValue={transactionsParameters?.from_block}
          placeholder="From block"
          rightIcon={MagnifyingGlassIcon}
          onKeyDown={(e) =>
            e.key === 'Enter' && setParams('from_block', e.currentTarget.value)
          }
          onClear={() => setParams('from_block', undefined)}
        />

        <TextInput
          defaultValue={transactionsParameters?.to_block}
          placeholder="To block"
          rightIcon={MagnifyingGlassIcon}
          onKeyDown={(e) =>
            e.key === 'Enter' && setParams('to_block', e.currentTarget.value)
          }
          onClear={() => setParams('to_block', undefined)}
        />

        <DatePickerDemo />
      </Filters.Root>

      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Hash</Table.Cell>
            <Table.Cell>Block</Table.Cell>
            <Table.Cell>Date</Table.Cell>
            <Table.Cell>From</Table.Cell>
            <Table.Cell>To</Table.Cell>
            <Table.Cell align="right">Amount</Table.Cell>
            <Table.Cell>In/Out</Table.Cell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {transactionsList.map((transaction) => (
            <Table.Row key={transaction.transaction_hash}>
              <Table.Cell>
                {createMiddleEllipsis(transaction.transaction_hash, 8, 8)}
              </Table.Cell>
              <Table.Cell>{transaction.block_number}</Table.Cell>
              <Table.Cell>{String(transaction.block_timestamp)}</Table.Cell>
              <Table.Cell>
                {createMiddleEllipsis(transaction.from_address, 8, 8)}
              </Table.Cell>
              <Table.Cell>
                {createMiddleEllipsis(transaction.to_address, 8, 8)}
              </Table.Cell>
              <Table.Cell align="right">
                {getAmountWithDecimals(transaction.value, EHTEREUM_DECIMALS)}{' '}
                ETH
              </Table.Cell>
              <Table.Cell>
                {transaction.from_address === address ? (
                  <Badge status="danger" className="w-fit">
                    Out
                  </Badge>
                ) : (
                  <Badge status="success" className="w-fit">
                    In
                  </Badge>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        {/* <Table.Pagination
          onNext={onNext}
          onPrevious={onPrevious}
          numberOfColumns={7}
          limit={limit}
          page={page ?? 0}
          count={transactions.count}
          isLoading={isLoading}
        /> */}
      </Table.Root>
    </div>
  );
};

export default TransactionsTable;

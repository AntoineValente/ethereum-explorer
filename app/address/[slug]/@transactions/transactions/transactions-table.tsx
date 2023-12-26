'use client';

import { FC } from 'react';

import { chainbaseClient } from '@/app/_api/chainbase-client';
import Badge from '@/app/_components/badge';
import { Table } from '@/app/_components/table';
import { PLarge } from '@/app/_components/typo';
import { EHTEREUM_DECIMALS } from '@/app/_consts';
import { getAmountWithDecimals } from '@/app/_utils/amount';
import { createMiddleEllipsis } from '@/app/_utils/text';

type Props = {
  transactions: Awaited<
    ReturnType<typeof chainbaseClient.getTransactions>
  >['data'];
  address: string;
};

const TransactionsTable: FC<Props> = ({ transactions, address }) => {
  return (
    <div className="flex flex-col space-y-7">
      <PLarge>Filters</PLarge>

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
          {transactions.map((transaction) => (
            <Table.Row key={transaction.transaction_hash}>
              <Table.Cell>
                {createMiddleEllipsis(transaction.transaction_hash, 7, 7)}
              </Table.Cell>
              <Table.Cell>{transaction.block_number}</Table.Cell>
              <Table.Cell>{String(transaction.block_timestamp)}</Table.Cell>
              <Table.Cell>
                {createMiddleEllipsis(transaction.from_address, 7, 7)}
              </Table.Cell>
              <Table.Cell>
                {createMiddleEllipsis(transaction.to_address, 7, 7)}
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
      </Table.Root>
    </div>
  );
};

export default TransactionsTable;

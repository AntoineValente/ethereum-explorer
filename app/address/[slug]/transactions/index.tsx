"use client";

import { useTransactionsFilters } from "@/app/address/[slug]/transactions/useTransactionsFilters";
import type { FC } from "react";
import { P, match } from "ts-pattern";
import type { AddressProps } from "../types";
import { TransactionsFilters } from "./TransactionsFilters";
import { TransactionsPagination } from "./TransactionsPagination";
import { TransactionsTable } from "./TransactionsTable";
import { TransactionsTableMessage } from "./TransactionsTableMessage";
import { TransactionsTableSkeleton } from "./TransactionsTableSkeleton";
import { useTransactions } from "./useTransactions";

export const Transactions: FC<AddressProps> = ({ address }) => {
  const { filters, setFromBlock, setToBlock, setFromDate, setToDate, setPage } =
    useTransactionsFilters();
  const transactionsState = useTransactions(address, filters);

  return (
    <div className="flex flex-col space-y-4">
      <TransactionsFilters
        filters={filters}
        setFromBlock={setFromBlock}
        setToBlock={setToBlock}
        setFromDate={setFromDate}
        setToDate={setToDate}
      />

      {match(transactionsState)
        .with({ status: "loading" }, { status: "idle" }, () => (
          <TransactionsTableSkeleton />
        ))
        .with({ status: "error", error: P.select() }, (error) => (
          <TransactionsTableMessage>
            An error occurred - <i>{error.message}</i>
          </TransactionsTableMessage>
        ))
        .with(
          { status: "success", transactionsResponse: P.select() },
          (transactionsResponse) => {
            const transactions = transactionsResponse.data;

            if (!transactions.length)
              return (
                <TransactionsTableMessage>
                  No activity found
                </TransactionsTableMessage>
              );

            return (
              <>
                <TransactionsTable
                  address={address}
                  transactions={transactions}
                />

                {transactionsResponse?.count ? (
                  <TransactionsPagination
                    count={transactionsResponse?.count}
                    currentPage={filters.page}
                    onPressPage={(page) => setPage(page)}
                  />
                ) : undefined}
              </>
            );
          },
        )
        .exhaustive()}
    </div>
  );
};

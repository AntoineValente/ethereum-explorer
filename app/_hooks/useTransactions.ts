'use client';

import { useCallback, useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { buildSearchParams } from '../_utils/query';
import type { TransactionsParameters as ApiTransactionsParameters } from '../api/chainbase-client';

export type TransactionsParameters = Omit<
  ApiTransactionsParameters,
  'chain_id' | 'address'
>;
type TransactionsFiltersKeys = keyof TransactionsParameters;

const filters: TransactionsFiltersKeys[] = [
  'limit',
  'page',
  'from_block',
  'to_block',
  'from_timestamp',
  'to_timestamp',
];

export const useTransactions = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [transactionsParameters, setTransactionsParameters] =
    useState<TransactionsParameters>({});

  useEffect(() => {
    let nextTransactionsParameters: TransactionsParameters = {};

    for (const [key, value] of searchParams.entries()) {
      if (filters.includes(key as TransactionsFiltersKeys)) {
        nextTransactionsParameters = {
          ...nextTransactionsParameters,
          [key]: value,
        };
      }
    }

    setTransactionsParameters(nextTransactionsParameters);
  }, [searchParams]);

  const setParams = useCallback(
    <T extends keyof TransactionsParameters>(
      params: T,
      value: TransactionsParameters[T],
    ) => {
      const nextUrl = `${pathname}?${buildSearchParams({
        ...transactionsParameters,
        [params]: value,
      })}`;

      router.push(nextUrl);
    },
    [pathname, router, transactionsParameters],
  );

  return {
    setParams,
    transactionsParameters,
  };
};

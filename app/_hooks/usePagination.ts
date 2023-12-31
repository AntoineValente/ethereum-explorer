import { useCallback, useEffect, useReducer, useState } from 'react';

import {
  PaginationParameters,
  PaginationResponse,
} from '../_api/chainbase-client';

type Args<T> = {
  fetcher: (
    parameters: Pick<PaginationParameters, 'page' | 'limit'>,
  ) => Promise<PaginationResponse & { data: T[] }>;
  limit: number;
};

type PaginationContext<T> = {
  page: number;
  limit: number;
  count?: number;
  data?: T[];
};

type PaginationState<T> =
  | { name: 'default'; context: PaginationContext<T> }
  | { name: 'fetching'; context: PaginationContext<T> }
  | {
      name: 'error';
      context: PaginationContext<T> & {
        reason: string;
      };
    };

type PaginationEvent<T> =
  | { type: 'NEXT' }
  | { type: 'PREVIOUS' }
  | { type: 'FETCH_SUCCESS'; result: PaginationResponse & { data: T[] } }
  | { type: 'FETCH_ERROR'; reason: string };

const reducer = <T>(
  state: PaginationState<T>,
  event: PaginationEvent<T>,
): PaginationState<T> => {
  switch (state.name) {
    case 'default': {
      switch (event.type) {
        case 'NEXT': {
          return {
            name: 'fetching',
            context: {
              ...state.context,
              page: state.context.page + 1,
            },
          };
        }

        case 'PREVIOUS': {
          return {
            name: 'fetching',
            context: {
              ...state.context,
              page: state.context.page - 1,
            },
          };
        }

        default:
          return state;
      }
    }

    case 'fetching': {
      switch (event.type) {
        case 'FETCH_SUCCESS': {
          const { data, count } = event.result;

          return {
            name: 'default',
            context: {
              count,
              data,
              limit: state.context.limit,
              page: state.context.page,
            },
          };
        }

        case 'FETCH_ERROR': {
          return {
            name: 'error',
            context: {
              ...state.context,
              reason: event.reason,
            },
          };
        }

        default:
          return state;
      }
    }

    default:
      return state;
  }
};

export const usePagination = <T>({
  fetcher,
  limit,
}: Args<T>): PaginationContext<T> & {
  onNext: () => void;
  onPrevious: () => void;
} => {
  const [state, send] = useReducer(reducer<T>, {
    name: 'default',
    context: {
      page: 0,
      limit,
    },
  });

  const onPrevious = useCallback(() => send({ type: 'NEXT' }), []);
  const onNext = useCallback(() => send({ type: 'PREVIOUS' }), []);

  useEffect(() => {
    if (state.name === 'fetching') {
      fetcher({ limit: state.context.limit, page: state.context.page })
        .then((result) => send({ type: 'FETCH_SUCCESS', result }))
        .catch((err: Error) =>
          send({ type: 'FETCH_ERROR', reason: err.message }),
        );
    }
  }, [fetcher, state]);

  return {
    onPrevious,
    onNext,
    ...state.context,
  };
};

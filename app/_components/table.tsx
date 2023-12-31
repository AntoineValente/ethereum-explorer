'use client';

import {
  ComponentProps,
  FC,
  PropsWithChildren,
  createContext,
  useContext,
} from 'react';

import clsx from 'clsx';

import { Button } from './button';
import { PMedium, PSmall } from './typo';

type RowState = {
  isHead: boolean;
};

const RowContext = createContext<RowState>({ isHead: false });

const Root: FC<PropsWithChildren> = ({ children }) => <table>{children}</table>;

const Head: FC<PropsWithChildren> = ({ children }) => (
  <RowContext.Provider value={{ isHead: true }}>
    <thead className="bg-background-subtle rounded-md">{children}</thead>
  </RowContext.Provider>
);

const Body: FC<PropsWithChildren> = ({ children }) => <tbody>{children}</tbody>;

type RowProps = ComponentProps<'tr'>;

const Row: FC<RowProps> = ({ children, className }) => (
  <tr className={clsx('h-11', className)}>{children}</tr>
);

type CellProps = ComponentProps<'td'>;

const Cell: FC<CellProps> = ({ children, className, ...rest }) => {
  const rowState = useContext(RowContext);

  return (
    <td {...rest} className={clsx('px-3.5 first:pl-6 last:pr-6', className)}>
      <PMedium className={clsx(rowState?.isHead && 'text-typo-muted')}>
        {children}
      </PMedium>
    </td>
  );
};

type PaginationProps = ComponentProps<'tfoot'> & {
  numberOfColumns: number;
  limit: number;
  page: number;
  count?: number;
  onNext: VoidFunction;
  onPrevious: VoidFunction;
};

const Pagination: FC<PaginationProps> = ({
  numberOfColumns,
  limit,
  page,
  count,
  onNext,
  onPrevious,
}) => (
  <tfoot>
    <Row>
      <Cell>
        <PSmall>
          Showing <b>{page === 1 ? 1 : (page - 1) * limit}</b> to{' '}
          <b>{limit * page}</b> of <b>{count}</b> results
        </PSmall>
      </Cell>
      {new Array(numberOfColumns - 2).fill('').map((_, index) => (
        <Cell key={index} />
      ))}
      <Cell align="right">
        <div className="flex flex-row space-x-3">
          <Button onClick={onPrevious} status="ghost">
            Previous
          </Button>
          <Button onClick={onNext} status="ghost">
            Next
          </Button>
        </div>
      </Cell>
    </Row>
  </tfoot>
);

export const Table = {
  Root,
  Head,
  Body,
  Row,
  Cell,
  Pagination,
};

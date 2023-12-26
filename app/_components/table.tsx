'use client';

import {
  ComponentProps,
  FC,
  PropsWithChildren,
  createContext,
  useContext,
} from 'react';

import clsx from 'clsx';

import { PMedium } from './typo';

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

const Row: FC<PropsWithChildren> = ({ children }) => (
  <tr className="h-11">{children}</tr>
);

type CellProps = ComponentProps<'td'>;

const Cell: FC<CellProps> = ({ children, ...rest }) => {
  const rowState = useContext(RowContext);

  return (
    <td {...rest} className="px-3.5 first:pl-6 last:pr-6">
      <PMedium className={clsx(rowState?.isHead && 'text-typo-muted')}>
        {children}
      </PMedium>
    </td>
  );
};

export const Table = {
  Root,
  Head,
  Body,
  Row,
  Cell,
};

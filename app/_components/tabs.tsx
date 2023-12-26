import { FC, PropsWithChildren } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { PSmall } from './typo';

const Root: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-row space-x-2">{children}</div>
);

type TabProps = PropsWithChildren & {
  isSelected?: boolean;
  href: string;
};

const Tab: FC<TabProps> = ({ isSelected = false, href, children }) => (
  <Link href={href}>
    <div
      className={clsx(
        'flex py-2 px-4 justify-center items-center rounded-full',
        isSelected && 'bg-primary-sutle',
      )}
    >
      <PSmall
        className={isSelected ? 'text-typo-primary-strong' : 'text-typo-base'}
      >
        {children}
      </PSmall>
    </div>
  </Link>
);

export const Tabs = {
  Root,
  Tab,
};

'use client';

import { FC, PropsWithChildren } from 'react';

import { Tabs } from '@/app/_components/tabs';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const segment = useSelectedLayoutSegment();
  const path = usePathname();
  const parsedPath = path.match(/^\/([^\/]+)\/[^\/]+(?=\/|$)/)?.[0];

  return (
    <div className="flex flex-col space-y-7">
      <Tabs.Root>
        <Tabs.Tab
          href={`${parsedPath}/transactions`}
          isSelected={!segment || segment === 'transactions'}
        >
          Transactions
        </Tabs.Tab>
        <Tabs.Tab
          href={`${parsedPath}/assets`}
          isSelected={segment === 'assets'}
        >
          Assets
        </Tabs.Tab>
      </Tabs.Root>

      {children}
    </div>
  );
};

export default Layout;

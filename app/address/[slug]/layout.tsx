import { FC, PropsWithChildren } from 'react';

import { Page } from '@/app/_components/page';

type Props = PropsWithChildren & {
  transactions: React.ReactNode;
};

const Layout: FC<Props> = ({ children, transactions }) => {
  return (
    <Page>
      <div className="flex flex-col space-y-10">
        {children}
        {transactions}
      </div>
    </Page>
  );
};

export default Layout;

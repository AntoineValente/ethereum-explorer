import { FC, PropsWithChildren } from 'react';

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return <div className="px-20 py-14">{children}</div>;
};

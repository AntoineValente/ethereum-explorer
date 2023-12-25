import { FC, PropsWithChildren } from 'react';

import { PCaption } from './typo';

const Badge: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center justify-center rounded-xl py-1 px-2 bg-primary-sutle">
      <PCaption className="text-typo-primary-strong">{children}</PCaption>
    </div>
  );
};

export default Badge;

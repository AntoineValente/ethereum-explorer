import { ComponentProps, FC } from 'react';

import clsx from 'clsx';

import { PSmall } from './typo';

type Props = ComponentProps<'button'> & {
  status: 'ghost';
};

export const Button: FC<Props> = ({ children, className, status, ...rest }) => (
  <button
    className={clsx(
      'flex min-w-9 min-h-9 py-2 px-3 justify-center items-center rounded-md',
      status === 'ghost' && 'border-[1px] border-solid border-background-muted',
      className,
    )}
    {...rest}
  >
    <PSmall>{children}</PSmall>
  </button>
);

import { ComponentProps, FC } from 'react';

import clsx from 'clsx';

import { PCaption } from './typo';

type BadgeProps = ComponentProps<'div'> & {
  status?: 'primary' | 'success' | 'danger';
};

const Badge: FC<BadgeProps> = ({ children, className, status = 'primary' }) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-lg py-1 px-2',
        status === 'primary' && 'bg-primary-sutle',
        status === 'success' && 'bg-success-subtle',
        status === 'danger' && 'bg-danger-subtle',
        className,
      )}
    >
      <PCaption
        className={clsx(
          status === 'primary' && 'text-typo-primary-strong',
          status === 'success' && 'text-typo-success-strong',
          status === 'danger' && 'text-typo-danger-strong',
        )}
      >
        {children}
      </PCaption>
    </div>
  );
};

export default Badge;

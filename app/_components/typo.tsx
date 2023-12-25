import { ComponentProps, FC } from 'react';

import { clsx } from 'clsx';

export type HeadingProps = ComponentProps<'h1'>;

export const H1: FC<HeadingProps> = ({ children, className, ...rest }) => (
  <h1 className={clsx('text-h1 text-typo-base', className)} {...rest}>
    {children}
  </h1>
);
export const H2: FC<HeadingProps> = ({ children, className, ...rest }) => (
  <h2 className={clsx('text-h2 text-typo-base', className)} {...rest}>
    {children}
  </h2>
);

export type PProps = ComponentProps<'p'>;

export const PLarge: FC<PProps> = ({ children, className, ...rest }) => (
  <p className={clsx('text-body-large text-typo-base', className)} {...rest}>
    {children}
  </p>
);
export const PMedium: FC<PProps> = ({ children, className, ...rest }) => (
  <p className={clsx('text-body-medium text-typo-base', className)} {...rest}>
    {children}
  </p>
);
export const PSmall: FC<PProps> = ({ children, className, ...rest }) => (
  <p className={clsx('text-body-small text-typo-base', className)} {...rest}>
    {children}
  </p>
);
export const PCaption: FC<PProps> = ({ children, className, ...rest }) => (
  <p className={clsx('text-caption text-typo-base', className)} {...rest}>
    {children}
  </p>
);

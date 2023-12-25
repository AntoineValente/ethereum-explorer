import { ComponentProps, FC } from 'react';

import clsx from 'clsx';

import { H2, HeadingProps, PMedium, PProps } from './typo';

type RootProps = ComponentProps<'div'>;

const Root: FC<RootProps> = ({ children, className }) => (
  <div
    className={clsx(
      className,
      'flex flex-col p-5 items-start gap-3.5 rounded bg-background-subtle border-2 border-border-base',
    )}
  >
    {children}
  </div>
);

const Title: FC<HeadingProps> = ({ children }) => <H2>{children}</H2>;

type SectionProps = ComponentProps<'div'>;

const Section: FC<SectionProps> = ({ children }) => (
  <div className="flex flex-col">{children}</div>
);

const SectionTitle: FC<PProps> = ({ children }) => (
  <PMedium className="text-typo-muted">{children}</PMedium>
);

export const Card = {
  Root,
  Title,
  Section,
  SectionTitle,
};

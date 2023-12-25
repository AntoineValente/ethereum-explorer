import { FC } from 'react';

type Props = {
  width: string;
  height: string;
};

export const Skeleton: FC<Props> = ({ width, height }) => {
  return (
    <div
      style={{ width, height }}
      className={'animate-pulse bg-background-muted rounded'}
    />
  );
};

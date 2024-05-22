import type { FC, PropsWithChildren } from "react";

export const TransactionsTableMessage: FC<PropsWithChildren> = ({
  children,
}) => <span className="self-center pt-14">{children}</span>;

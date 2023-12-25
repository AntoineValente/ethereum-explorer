import BigNumber from 'bignumber.js';

export const getAmountWithDecimals = (
  amount: string | undefined,
  decimals?: number,
): string => {
  const bigNumberAmount = new BigNumber(amount ?? 0);
  return bigNumberAmount.dividedBy(10 ** (decimals ?? 0)).toString();
};

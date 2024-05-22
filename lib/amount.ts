import BigNumber from "bignumber.js";

const ETHEREUM_DECIMALS = 18;

export const getAmountWithDecimals = (
  amount: string | undefined,
  decimals = ETHEREUM_DECIMALS,
): string => {
  const bigNumberAmount = new BigNumber(amount ?? 0);
  return bigNumberAmount.dividedBy(10 ** (decimals ?? 0)).toString();
};

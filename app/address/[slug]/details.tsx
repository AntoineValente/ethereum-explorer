import { FC } from 'react';

import { EHTEREUM_DECIMALS } from '@/app/_consts';
import { getAmountWithDecimals } from '@/app/_utils/balance';
import Moralis from 'moralis';
import { EvmChain, EvmNative } from 'moralis/common-evm-utils';

const getData = async (address: string) => {
  const nativeBalanceResponse = await Moralis.EvmApi.balance.getNativeBalance({
    chain: EvmChain.ETHEREUM,
    address: address,
  });
  const nativeBalance = nativeBalanceResponse.toJSON();

  const tokensResponse = await Moralis.EvmApi.token.getWalletTokenBalances({
    chain: '0x1',
    address: '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326',
  });
  const tokens = tokensResponse.toJSON();

  return {
    ...nativeBalance,
    tokens,
  };
};

type Props = {
  address: string;
};

const Details: FC<Props> = async ({ address }) => {
  const result = await getData(address);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h1>Overview</h1>

      <span>
        <b>Address:</b> {address}
      </span>

      <span>
        <b>Balance:</b>{' '}
        {getAmountWithDecimals(result.balance, EHTEREUM_DECIMALS)} <b>ETH</b>
      </span>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b>Tokens ERC20 {`(found ${result.tokens.length})`}</b>
        {result.tokens.slice(0, 10).map((token) => (
          <span key={token.symbol}>
            <b>{token.name}:</b>{' '}
            {getAmountWithDecimals(token.balance, token.decimals)}{' '}
            {token.symbol}
          </span>
        ))}
        and more...
      </div>
    </div>
  );
};

export default Details;

import { FC } from 'react';

const getData = async (address: string) => {
  // const response = await Moralis.EvmApi.transaction.getWalletTransactions({
  //   chain: EvmChain.ETHEREUM,
  //   address,
  // });
  // return response.toJSON();
};

type Props = {
  address: string;
};

const Transactions: FC<Props> = async ({ address }) => {
  // const transactions = await getData(address);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Transactions</h1>

      {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {transactions.result.map((transaction) => (
          <div key={transaction.hash} style={{ display: 'flex', gap: '5px' }}>
            <span>
              <b>Date: </b>{' '}
              {new Date(transaction.block_timestamp).toISOString()}
            </span>
            <span>
              <b>Hash: </b> {transaction.hash}
            </span>
            <span>
              <b>From: </b> {transaction.from_address}
            </span>
            <span>
              <b>To: </b> {transaction.to_address}
            </span>
          </div>
        ))}
      </div> */}

      {/* <pre>{JSON.stringify(transactions, null, 2)}</pre> */}
    </div>
  );
};

export default Transactions;

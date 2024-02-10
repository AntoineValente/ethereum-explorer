import {
  ChainId,
  TransactionsParameters,
  chainbaseClient,
} from '../chainbase-client';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');

  if (!address)
    return Response.json(
      { reason: "query param 'address' not found" },
      {
        status: 400,
      },
    );

  const page = searchParams.get('page') ?? 1;
  const limit = searchParams.get('limit') ?? 10;

  let parameters: TransactionsParameters = {
    address,
    chain_id: ChainId.EHTEREUM,
    page: +page,
    limit: +limit,
  };

  const toBlock = searchParams.get('to_block');
  if (toBlock) parameters.to_block = toBlock;

  const fromBlock = searchParams.get('from_block');
  if (fromBlock) parameters.from_block = fromBlock;

  const transactions = await chainbaseClient.getTransactions(parameters);

  return Response.json(transactions);
}

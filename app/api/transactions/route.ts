import { ChainId, chainbaseClient } from '../chainbase-client';

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

  const transactions = await chainbaseClient.getTransactions({
    address,
    chain_id: ChainId.EHTEREUM,
    page: +page,
    limit: +limit,
  });

  return Response.json(transactions);
}

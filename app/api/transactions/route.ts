"use server";

import { ChainId, chainbaseSdk } from "@/api";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const address = searchParams.get("address");

	if (!address)
		return new Response("address is missing", {
			status: 400,
		});

	const fromBlock = searchParams.get("from_block");
	const toBlock = searchParams.get("to_block");
	const fromDate = searchParams.get("from_timestamp");
	const toDate = searchParams.get("end_timestamp");
	const page = searchParams.get("page");

	const query = {
		address,
		chain_id: ChainId.ETHEREUM,
		limit: 15,
		from_block: fromBlock ?? undefined,
		to_block: toBlock ?? undefined,
		from_timestamp: fromDate ? +fromDate : undefined,
		end_timestamp: toDate ? +toDate : undefined,
		page: page ? +page : 1,
	};

	const data = await chainbaseSdk.get("/v1/account/txs", {
		params: {
			query,
		},
	});

	return Response.json(data);
}

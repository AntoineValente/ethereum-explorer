import createClient from "openapi-fetch";
import type { paths } from "./schema";

const { GET } = createClient<paths>({
	baseUrl: process.env.CHAINBASE_API_URL,
	headers: {
		"x-api-key": process.env.CHAINBASE_API_KEY,
	},
});

export const chainbaseSdk = {
	get: GET,
};

export enum ChainId {
	ETHEREUM = 1,
}

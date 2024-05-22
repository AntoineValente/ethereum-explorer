import retry from "async-retry";
import createClient from "openapi-fetch";
import type { paths } from "./schema";

const fetcher: typeof fetch = (...args) =>
  retry(
    async (bail) => {
      const res = await fetch(...args);

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res;
    },
    {
      forever: true,
      minTimeout: 500,
    },
  );

const { GET } = createClient<paths>({
  baseUrl: process.env.CHAINBASE_API_URL,
  fetch: fetcher,
  headers: {
    "x-api-key": process.env.CHAINBASE_API_KEY,
  },
  cache: "no-store",
});

export const chainbaseSdk = {
  get: GET,
};

export enum ChainId {
  ETHEREUM = 1,
}

import z from 'zod';

import { Endpoint, buildApiClient } from './api-client-builder';

export enum ChainId {
  EHTEREUM = 1,
}

const response = z.object({
  code: z.number(),
  message: z.string(),
});

const paginationResponse = response.extend({
  next_page: z.number().optional(),
  count: z.number().optional(),
});

const parameters = z.object({
  chain_id: z.number(),
  address: z.string(),
});

const paginationParameters = parameters.extend({
  limit: z.number().optional(),
  page: z.number().optional(),
});

enum TransactionType {
  LegacyTx,
  AccessListTx,
  DynamicFeeTx,
  BlobTx,
}

enum TransactionStatus {
  Failed,
  Success,
}

const endpoints = [
  {
    method: 'GET',
    alias: 'getNativeBalance',
    path: '/v1/account/balance',
    parameters,
    response: response.extend({
      data: z.string(),
    }),
  },
  {
    method: 'GET',
    alias: 'getTokenBalances',
    path: '/v1/account/tokens',
    parameters: paginationParameters,
    response: paginationResponse.extend({
      data: z.array(
        z.object({
          contract_address: z.string(),
          decimals: z.number(),
          name: z.string(),
          symbol: z.string(),
          total_supply: z.string().optional(),
          logs: z
            .array(
              z.object({
                url: z.string(),
                wdth: z.number(),
                height: z.number(),
              }),
            )
            .optional(),
          urls: z
            .array(
              z.object({
                name: z.string(),
                url: z.string(),
              }),
            )
            .optional(),
          current_usd_price: z.number().optional(),
          balance: z.string(),
        }),
      ),
    }),
  },
  {
    method: 'GET',
    alias: 'getNFTBalances',
    path: '/v1/account/nfts',
    parameters: paginationParameters,
    response: paginationResponse.extend({
      data: z.array(
        z.object({
          contract_address: z.string(),
          erc_type: z.string(),
          metadata: z.object({}).optional(),
          mint_time: z.date(),
          mint_transaction_hash: z.string(),
          name: z.string(),
          owner: z.string(),
          symbol: z.string(),
          token_id: z.string(),
          token_uri: z.string(),
          image_uri: z.string(),
          total: z.number(),
          total_string: z.string(),
          traits: z.string().optional(),
          rarity_score: z.number().optional(),
          rarity_rank: z.number().optional(),
          floor_prices: z
            .array(
              z.object({
                value: z.string().optional(),
                symbol: z.string().optional(),
                address: z.string().optional(),
              }),
            )
            .optional(),
        }),
      ),
    }),
  },
  {
    method: 'GET',
    alias: 'getTransactions',
    path: '/v1/account/txs',
    parameters: paginationParameters,
    response: paginationResponse.extend({
      data: z.array(
        z.object({
          type: z.nativeEnum(TransactionType),
          status: z.nativeEnum(TransactionStatus),
          block_number: z.number(),
          block_timestamp: z.date(),
          transaction_hash: z.string(),
          transaction_index: z.number(),
          from_address: z.string(),
          to_address: z.string(),
          value: z.string(),
          input: z.string(),
          nonce: z.number(),
          contract_address: z.string(),
          gas: z.number(),
          gas_price: z.number(),
          gas_used: z.number(),
          effective_gas_price: z.number(),
          cumulative_gas_used: z.number(),
          max_fee_per_gas: z.number(),
          max_priority_fee_per_gas: z.number(),
          tx_fee: z.number(),
          saving_fee: z.number(),
          burnt_fee: z.number(),
        }),
      ),
    }),
  },
] as const;

const chainbaseEndpointUrl = process.env.CHAINBASE_ENDPOINT_URL as string;
const chainbaseApiKey = process.env.CHAINBASE_API_KEY as string;

export const chainbaseClient = buildApiClient(
  chainbaseEndpointUrl,
  chainbaseApiKey,
  endpoints,
);

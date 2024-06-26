import type { FromSchema } from "json-schema-to-ts";
import type * as schemas from "./schemas";

export type ContractCallBodyParam = FromSchema<
  typeof schemas.ContractCall.body
>;
export type ContractCallMetadataParam = FromSchema<
  typeof schemas.ContractCall.metadata
>;
export type ContractCallResponse200 = FromSchema<
  (typeof schemas.ContractCall.response)["200"]
>;
export type ContractCallResponse400 = FromSchema<
  (typeof schemas.ContractCall.response)["400"]
>;
export type ContractCallResponse401 = FromSchema<
  (typeof schemas.ContractCall.response)["401"]
>;
export type ContractCallResponse403 = FromSchema<
  (typeof schemas.ContractCall.response)["403"]
>;
export type ContractCallResponse404 = FromSchema<
  (typeof schemas.ContractCall.response)["404"]
>;
export type ContractCallResponse422 = FromSchema<
  (typeof schemas.ContractCall.response)["422"]
>;
export type ContractCallResponse500 = FromSchema<
  (typeof schemas.ContractCall.response)["500"]
>;
export type GetAccountTxsMetadataParam = FromSchema<
  typeof schemas.GetAccountTxs.metadata
>;
export type GetAccountTxsResponse200 = FromSchema<
  (typeof schemas.GetAccountTxs.response)["200"]
>;
export type GetAccountTxsResponse400 = FromSchema<
  (typeof schemas.GetAccountTxs.response)["400"]
>;
export type GetAccountTxsResponse401 = FromSchema<
  (typeof schemas.GetAccountTxs.response)["401"]
>;
export type GetAccountTxsResponse403 = FromSchema<
  (typeof schemas.GetAccountTxs.response)["403"]
>;
export type GetAccountTxsResponse404 = FromSchema<
  (typeof schemas.GetAccountTxs.response)["404"]
>;
export type GetAccountTxsResponse422 = FromSchema<
  (typeof schemas.GetAccountTxs.response)["422"]
>;
export type GetAccountTxsResponse500 = FromSchema<
  (typeof schemas.GetAccountTxs.response)["500"]
>;
export type GetBlockDetailMetadataParam = FromSchema<
  typeof schemas.GetBlockDetail.metadata
>;
export type GetBlockDetailResponse200 = FromSchema<
  (typeof schemas.GetBlockDetail.response)["200"]
>;
export type GetBlockDetailResponse400 = FromSchema<
  (typeof schemas.GetBlockDetail.response)["400"]
>;
export type GetBlockDetailResponse401 = FromSchema<
  (typeof schemas.GetBlockDetail.response)["401"]
>;
export type GetBlockDetailResponse403 = FromSchema<
  (typeof schemas.GetBlockDetail.response)["403"]
>;
export type GetBlockDetailResponse404 = FromSchema<
  (typeof schemas.GetBlockDetail.response)["404"]
>;
export type GetBlockDetailResponse422 = FromSchema<
  (typeof schemas.GetBlockDetail.response)["422"]
>;
export type GetBlockDetailResponse500 = FromSchema<
  (typeof schemas.GetBlockDetail.response)["500"]
>;
export type GetBlockNumberLatestMetadataParam = FromSchema<
  typeof schemas.GetBlockNumberLatest.metadata
>;
export type GetBlockNumberLatestResponse200 = FromSchema<
  (typeof schemas.GetBlockNumberLatest.response)["200"]
>;
export type GetBlockNumberLatestResponse400 = FromSchema<
  (typeof schemas.GetBlockNumberLatest.response)["400"]
>;
export type GetBlockNumberLatestResponse401 = FromSchema<
  (typeof schemas.GetBlockNumberLatest.response)["401"]
>;
export type GetBlockNumberLatestResponse403 = FromSchema<
  (typeof schemas.GetBlockNumberLatest.response)["403"]
>;
export type GetBlockNumberLatestResponse404 = FromSchema<
  (typeof schemas.GetBlockNumberLatest.response)["404"]
>;
export type GetBlockNumberLatestResponse422 = FromSchema<
  (typeof schemas.GetBlockNumberLatest.response)["422"]
>;
export type GetBlockNumberLatestResponse500 = FromSchema<
  (typeof schemas.GetBlockNumberLatest.response)["500"]
>;
export type GetContractEventsMetadataParam = FromSchema<
  typeof schemas.GetContractEvents.metadata
>;
export type GetContractEventsResponse200 = FromSchema<
  (typeof schemas.GetContractEvents.response)["200"]
>;
export type GetContractEventsResponse400 = FromSchema<
  (typeof schemas.GetContractEvents.response)["400"]
>;
export type GetContractEventsResponse401 = FromSchema<
  (typeof schemas.GetContractEvents.response)["401"]
>;
export type GetContractEventsResponse403 = FromSchema<
  (typeof schemas.GetContractEvents.response)["403"]
>;
export type GetContractEventsResponse404 = FromSchema<
  (typeof schemas.GetContractEvents.response)["404"]
>;
export type GetContractEventsResponse422 = FromSchema<
  (typeof schemas.GetContractEvents.response)["422"]
>;
export type GetContractEventsResponse500 = FromSchema<
  (typeof schemas.GetContractEvents.response)["500"]
>;
export type GetTxDetailMetadataParam = FromSchema<
  typeof schemas.GetTxDetail.metadata
>;
export type GetTxDetailResponse200 = FromSchema<
  (typeof schemas.GetTxDetail.response)["200"]
>;
export type GetTxDetailResponse400 = FromSchema<
  (typeof schemas.GetTxDetail.response)["400"]
>;
export type GetTxDetailResponse401 = FromSchema<
  (typeof schemas.GetTxDetail.response)["401"]
>;
export type GetTxDetailResponse403 = FromSchema<
  (typeof schemas.GetTxDetail.response)["403"]
>;
export type GetTxDetailResponse404 = FromSchema<
  (typeof schemas.GetTxDetail.response)["404"]
>;
export type GetTxDetailResponse422 = FromSchema<
  (typeof schemas.GetTxDetail.response)["422"]
>;
export type GetTxDetailResponse500 = FromSchema<
  (typeof schemas.GetTxDetail.response)["500"]
>;

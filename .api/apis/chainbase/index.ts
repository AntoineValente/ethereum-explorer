import type * as types from "./types";
import type { ConfigOptions, FetchResponse } from "api/dist/core";
import Oas from "oas";
import APICore from "api/dist/core";
import definition from "./openapi.json";

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, "chainbase/v1.0.0 (api/6.1.1)");
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Get the latest block height of blockchain network.
   *
   * @summary Get latest block number
   * @throws FetchError<400, types.GetBlockNumberLatestResponse400> Bad Request
   * @throws FetchError<401, types.GetBlockNumberLatestResponse401> Unauthorized
   * @throws FetchError<403, types.GetBlockNumberLatestResponse403> Forbidden
   * @throws FetchError<404, types.GetBlockNumberLatestResponse404> Not Found
   * @throws FetchError<422, types.GetBlockNumberLatestResponse422> Unprocessable Entity
   * @throws FetchError<500, types.GetBlockNumberLatestResponse500> Internal Server Error
   */
  getBlockNumberLatest(
    metadata: types.GetBlockNumberLatestMetadataParam,
  ): Promise<FetchResponse<200, types.GetBlockNumberLatestResponse200>> {
    return this.core.fetch("/v1/block/number/latest", "get", metadata);
  }

  /**
   * Get the detail of a block by the given block humber.
   *
   * @summary Get block by number
   * @throws FetchError<400, types.GetBlockDetailResponse400> Bad Request
   * @throws FetchError<401, types.GetBlockDetailResponse401> Unauthorized
   * @throws FetchError<403, types.GetBlockDetailResponse403> Forbidden
   * @throws FetchError<404, types.GetBlockDetailResponse404> Not Found
   * @throws FetchError<422, types.GetBlockDetailResponse422> Unprocessable Entity
   * @throws FetchError<500, types.GetBlockDetailResponse500> Internal Server Error
   */
  getBlockDetail(
    metadata: types.GetBlockDetailMetadataParam,
  ): Promise<FetchResponse<200, types.GetBlockDetailResponse200>> {
    return this.core.fetch("/v1/block/detail", "get", metadata);
  }

  /**
   * Get the detail of a transaction given the transaction hash.
   *
   * Provide the param "hash" or ("block_number" and "tx_index"). If both params are
   * provided,
   * "hash" will be used.
   *
   * @summary Get transaction
   * @throws FetchError<400, types.GetTxDetailResponse400> Bad Request
   * @throws FetchError<401, types.GetTxDetailResponse401> Unauthorized
   * @throws FetchError<403, types.GetTxDetailResponse403> Forbidden
   * @throws FetchError<404, types.GetTxDetailResponse404> Not Found
   * @throws FetchError<422, types.GetTxDetailResponse422> Unprocessable Entity
   * @throws FetchError<500, types.GetTxDetailResponse500> Internal Server Error
   */
  getTxDetail(
    metadata: types.GetTxDetailMetadataParam,
  ): Promise<FetchResponse<200, types.GetTxDetailResponse200>> {
    return this.core.fetch("/v1/tx/detail", "get", metadata);
  }

  /**
   * Returns the transactions from the address.
   *
   * @summary Get transactions by account
   * @throws FetchError<400, types.GetAccountTxsResponse400> Bad Request
   * @throws FetchError<401, types.GetAccountTxsResponse401> Unauthorized
   * @throws FetchError<403, types.GetAccountTxsResponse403> Forbidden
   * @throws FetchError<404, types.GetAccountTxsResponse404> Not Found
   * @throws FetchError<422, types.GetAccountTxsResponse422> Unprocessable Entity
   * @throws FetchError<500, types.GetAccountTxsResponse500> Internal Server Error
   */
  getAccountTxs(
    metadata: types.GetAccountTxsMetadataParam,
  ): Promise<FetchResponse<200, types.GetAccountTxsResponse200>> {
    return this.core.fetch("/v1/account/txs", "get", metadata);
  }

  /**
   * Gets the list of events for the specified contract.
   *
   * @summary Get events by contract
   * @throws FetchError<400, types.GetContractEventsResponse400> Bad Request
   * @throws FetchError<401, types.GetContractEventsResponse401> Unauthorized
   * @throws FetchError<403, types.GetContractEventsResponse403> Forbidden
   * @throws FetchError<404, types.GetContractEventsResponse404> Not Found
   * @throws FetchError<422, types.GetContractEventsResponse422> Unprocessable Entity
   * @throws FetchError<500, types.GetContractEventsResponse500> Internal Server Error
   */
  getContractEvents(
    metadata: types.GetContractEventsMetadataParam,
  ): Promise<FetchResponse<200, types.GetContractEventsResponse200>> {
    return this.core.fetch("/v1/contract/events", "get", metadata);
  }

  /**
   * Calls a specific function for the specified contract.
   *
   * @summary Contract call
   * @throws FetchError<400, types.ContractCallResponse400> Bad Request
   * @throws FetchError<401, types.ContractCallResponse401> Unauthorized
   * @throws FetchError<403, types.ContractCallResponse403> Forbidden
   * @throws FetchError<404, types.ContractCallResponse404> Not Found
   * @throws FetchError<422, types.ContractCallResponse422> Unprocessable Entity
   * @throws FetchError<500, types.ContractCallResponse500> Internal Server Error
   */
  contractCall(
    body: types.ContractCallBodyParam,
    metadata: types.ContractCallMetadataParam,
  ): Promise<FetchResponse<200, types.ContractCallResponse200>> {
    return this.core.fetch("/v1/contract/call", "post", body, metadata);
  }
}

const createSDK = (() => {
  return new SDK();
})();

export default createSDK;

export type {
  ContractCallBodyParam,
  ContractCallMetadataParam,
  ContractCallResponse200,
  ContractCallResponse400,
  ContractCallResponse401,
  ContractCallResponse403,
  ContractCallResponse404,
  ContractCallResponse422,
  ContractCallResponse500,
  GetAccountTxsMetadataParam,
  GetAccountTxsResponse200,
  GetAccountTxsResponse400,
  GetAccountTxsResponse401,
  GetAccountTxsResponse403,
  GetAccountTxsResponse404,
  GetAccountTxsResponse422,
  GetAccountTxsResponse500,
  GetBlockDetailMetadataParam,
  GetBlockDetailResponse200,
  GetBlockDetailResponse400,
  GetBlockDetailResponse401,
  GetBlockDetailResponse403,
  GetBlockDetailResponse404,
  GetBlockDetailResponse422,
  GetBlockDetailResponse500,
  GetBlockNumberLatestMetadataParam,
  GetBlockNumberLatestResponse200,
  GetBlockNumberLatestResponse400,
  GetBlockNumberLatestResponse401,
  GetBlockNumberLatestResponse403,
  GetBlockNumberLatestResponse404,
  GetBlockNumberLatestResponse422,
  GetBlockNumberLatestResponse500,
  GetContractEventsMetadataParam,
  GetContractEventsResponse200,
  GetContractEventsResponse400,
  GetContractEventsResponse401,
  GetContractEventsResponse403,
  GetContractEventsResponse404,
  GetContractEventsResponse422,
  GetContractEventsResponse500,
  GetTxDetailMetadataParam,
  GetTxDetailResponse200,
  GetTxDetailResponse400,
  GetTxDetailResponse401,
  GetTxDetailResponse403,
  GetTxDetailResponse404,
  GetTxDetailResponse422,
  GetTxDetailResponse500,
} from "./types";

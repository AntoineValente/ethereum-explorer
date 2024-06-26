const ContractCall = {
  body: {
    title: "ContractCallBody",
    required: [
      "chain_id",
      "contract_address",
      "function_name",
      "abi",
      "params",
      "to_block",
    ],
    type: "object",
    properties: {
      chain_id: { title: "Chain Id", type: "integer", examples: [1] },
      contract_address: {
        title: "Contract Address",
        type: "string",
        examples: ["0xed5af388653567af2f388e6224dc7c4b3241c544"],
      },
      function_name: {
        title: "Function Name",
        type: "string",
        examples: ["name"],
      },
      abi: {
        title: "Abi",
        type: "string",
        examples: [
          '[\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "maxBatchSize_",\n        "type": "uint256"\n      },\n      {\n        "internalType": "uint256",\n        "name": "collectionSize_",\n        "type": "uint256"\n      },\n      {\n        "internalType": "uint256",\n        "name": "amountForAuctionAndDev_",\n        "type": "uint256"\n      },\n      {\n        "internalType": "uint256",\n        "name": "amountForDevs_",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "nonpayable",\n    "type": "constructor"\n  },\n  {\n    "anonymous": false,\n    "inputs": [\n      {\n        "indexed": true,\n        "internalType": "address",\n        "name": "owner",\n        "type": "address"\n      },\n      {\n        "indexed": true,\n        "internalType": "address",\n        "name": "approved",\n        "type": "address"\n      },\n      {\n        "indexed": true,\n        "internalType": "uint256",\n        "name": "tokenId",\n        "type": "uint256"\n      }\n    ],\n    "name": "Approval",\n    "type": "event"\n  },\n  {\n    "anonymous": false,\n    "inputs": [\n      {\n        "indexed": true,\n        "internalType": "address",\n        "name": "owner",\n        "type": "address"\n      },\n      {\n        "indexed": true,\n        "internalType": "address",\n        "name": "operator",\n        "type": "address"\n      },\n      {\n        "indexed": false,\n        "internalType": "bool",\n        "name": "approved",\n        "type": "bool"\n      }\n    ],\n    "name": "ApprovalForAll",\n    "type": "event"\n  },\n  {\n    "anonymous": false,\n    "inputs": [\n      {\n        "indexed": true,\n        "internalType": "address",\n        "name": "previousOwner",\n        "type": "address"\n      },\n      {\n        "indexed": true,\n        "internalType": "address",\n        "name": "newOwner",\n        "type": "address"\n      }\n    ],\n    "name": "OwnershipTransferred",\n    "type": "event"\n  },\n  {\n    "anonymous": false,\n    "inputs": [\n      {\n        "indexed": true,\n        "internalType": "address",\n        "name": "from",\n        "type": "address"\n      },\n      {\n        "indexed": true,\n        "internalType": "address",\n        "name": "to",\n        "type": "address"\n      },\n      {\n        "indexed": true,\n        "internalType": "uint256",\n        "name": "tokenId",\n        "type": "uint256"\n      }\n    ],\n    "name": "Transfer",\n    "type": "event"\n  },\n  {\n    "inputs": [],\n    "name": "AUCTION_DROP_INTERVAL",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "AUCTION_DROP_PER_STEP",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "AUCTION_END_PRICE",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "AUCTION_PRICE_CURVE_LENGTH",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "AUCTION_START_PRICE",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "",\n        "type": "address"\n      }\n    ],\n    "name": "allowlist",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "allowlistMint",\n    "outputs": [],\n    "stateMutability": "payable",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "amountForAuctionAndDev",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "amountForDevs",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "to",\n        "type": "address"\n      },\n      {\n        "internalType": "uint256",\n        "name": "tokenId",\n        "type": "uint256"\n      }\n    ],\n    "name": "approve",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "quantity",\n        "type": "uint256"\n      }\n    ],\n    "name": "auctionMint",\n    "outputs": [],\n    "stateMutability": "payable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "owner",\n        "type": "address"\n      }\n    ],\n    "name": "balanceOf",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "quantity",\n        "type": "uint256"\n      }\n    ],\n    "name": "devMint",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint64",\n        "name": "mintlistPriceWei",\n        "type": "uint64"\n      },\n      {\n        "internalType": "uint64",\n        "name": "publicPriceWei",\n        "type": "uint64"\n      },\n      {\n        "internalType": "uint32",\n        "name": "publicSaleStartTime",\n        "type": "uint32"\n      }\n    ],\n    "name": "endAuctionAndSetupNonAuctionSaleInfo",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "tokenId",\n        "type": "uint256"\n      }\n    ],\n    "name": "getApproved",\n    "outputs": [\n      {\n        "internalType": "address",\n        "name": "",\n        "type": "address"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "_saleStartTime",\n        "type": "uint256"\n      }\n    ],\n    "name": "getAuctionPrice",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "tokenId",\n        "type": "uint256"\n      }\n    ],\n    "name": "getOwnershipData",\n    "outputs": [\n      {\n        "components": [\n          {\n            "internalType": "address",\n            "name": "addr",\n            "type": "address"\n          },\n          {\n            "internalType": "uint64",\n            "name": "startTimestamp",\n            "type": "uint64"\n          }\n        ],\n        "internalType": "struct ERC721A.TokenOwnership",\n        "name": "",\n        "type": "tuple"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "owner",\n        "type": "address"\n      },\n      {\n        "internalType": "address",\n        "name": "operator",\n        "type": "address"\n      }\n    ],\n    "name": "isApprovedForAll",\n    "outputs": [\n      {\n        "internalType": "bool",\n        "name": "",\n        "type": "bool"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "publicPriceWei",\n        "type": "uint256"\n      },\n      {\n        "internalType": "uint256",\n        "name": "publicSaleKey",\n        "type": "uint256"\n      },\n      {\n        "internalType": "uint256",\n        "name": "publicSaleStartTime",\n        "type": "uint256"\n      }\n    ],\n    "name": "isPublicSaleOn",\n    "outputs": [\n      {\n        "internalType": "bool",\n        "name": "",\n        "type": "bool"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "maxPerAddressDuringMint",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "name",\n    "outputs": [\n      {\n        "internalType": "string",\n        "name": "",\n        "type": "string"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "nextOwnerToExplicitlySet",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "owner",\n        "type": "address"\n      }\n    ],\n    "name": "numberMinted",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "owner",\n    "outputs": [\n      {\n        "internalType": "address",\n        "name": "",\n        "type": "address"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "tokenId",\n        "type": "uint256"\n      }\n    ],\n    "name": "ownerOf",\n    "outputs": [\n      {\n        "internalType": "address",\n        "name": "",\n        "type": "address"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "quantity",\n        "type": "uint256"\n      },\n      {\n        "internalType": "uint256",\n        "name": "callerPublicSaleKey",\n        "type": "uint256"\n      }\n    ],\n    "name": "publicSaleMint",\n    "outputs": [],\n    "stateMutability": "payable",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "renounceOwnership",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "from",\n        "type": "address"\n      },\n      {\n        "internalType": "address",\n        "name": "to",\n        "type": "address"\n      },\n      {\n        "internalType": "uint256",\n        "name": "tokenId",\n        "type": "uint256"\n      }\n    ],\n    "name": "safeTransferFrom",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "from",\n        "type": "address"\n      },\n      {\n        "internalType": "address",\n        "name": "to",\n        "type": "address"\n      },\n      {\n        "internalType": "uint256",\n        "name": "tokenId",\n        "type": "uint256"\n      },\n      {\n        "internalType": "bytes",\n        "name": "_data",\n        "type": "bytes"\n      }\n    ],\n    "name": "safeTransferFrom",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "saleConfig",\n    "outputs": [\n      {\n        "internalType": "uint32",\n        "name": "auctionSaleStartTime",\n        "type": "uint32"\n      },\n      {\n        "internalType": "uint32",\n        "name": "publicSaleStartTime",\n        "type": "uint32"\n      },\n      {\n        "internalType": "uint64",\n        "name": "mintlistPrice",\n        "type": "uint64"\n      },\n      {\n        "internalType": "uint64",\n        "name": "publicPrice",\n        "type": "uint64"\n      },\n      {\n        "internalType": "uint32",\n        "name": "publicSaleKey",\n        "type": "uint32"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address[]",\n        "name": "addresses",\n        "type": "address[]"\n      },\n      {\n        "internalType": "uint256[]",\n        "name": "numSlots",\n        "type": "uint256[]"\n      }\n    ],\n    "name": "seedAllowlist",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "operator",\n        "type": "address"\n      },\n      {\n        "internalType": "bool",\n        "name": "approved",\n        "type": "bool"\n      }\n    ],\n    "name": "setApprovalForAll",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint32",\n        "name": "timestamp",\n        "type": "uint32"\n      }\n    ],\n    "name": "setAuctionSaleStartTime",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "string",\n        "name": "baseURI",\n        "type": "string"\n      }\n    ],\n    "name": "setBaseURI",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "quantity",\n        "type": "uint256"\n      }\n    ],\n    "name": "setOwnersExplicit",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint32",\n        "name": "key",\n        "type": "uint32"\n      }\n    ],\n    "name": "setPublicSaleKey",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "bytes4",\n        "name": "interfaceId",\n        "type": "bytes4"\n      }\n    ],\n    "name": "supportsInterface",\n    "outputs": [\n      {\n        "internalType": "bool",\n        "name": "",\n        "type": "bool"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "symbol",\n    "outputs": [\n      {\n        "internalType": "string",\n        "name": "",\n        "type": "string"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "index",\n        "type": "uint256"\n      }\n    ],\n    "name": "tokenByIndex",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "owner",\n        "type": "address"\n      },\n      {\n        "internalType": "uint256",\n        "name": "index",\n        "type": "uint256"\n      }\n    ],\n    "name": "tokenOfOwnerByIndex",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint256",\n        "name": "tokenId",\n        "type": "uint256"\n      }\n    ],\n    "name": "tokenURI",\n    "outputs": [\n      {\n        "internalType": "string",\n        "name": "",\n        "type": "string"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "totalSupply",\n    "outputs": [\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "from",\n        "type": "address"\n      },\n      {\n        "internalType": "address",\n        "name": "to",\n        "type": "address"\n      },\n      {\n        "internalType": "uint256",\n        "name": "tokenId",\n        "type": "uint256"\n      }\n    ],\n    "name": "transferFrom",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "newOwner",\n        "type": "address"\n      }\n    ],\n    "name": "transferOwnership",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "withdrawMoney",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  }\n]\n',
        ],
      },
      params: { title: "Params", type: "array", items: {} },
      to_block: { title: "To Block", type: "string", examples: ["latest"] },
    },
    $schema: "http://json-schema.org/draft-04/schema#",
  },
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          "x-api-key": {
            title: "X-Api-Key",
            type: "string",
            examples: ["demo"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["x-api-key"],
      },
    ],
  },
  response: {
    "200": {
      title: "ResponseContractCall",
      required: ["data"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer", default: 0 },
        message: { title: "Message", type: "string", default: "success" },
        data: { title: "Data", type: "array", items: {} },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "400": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "401": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "403": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "404": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "422": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "500": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
  },
} as const;
const GetAccountTxs = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          chain_id: {
            title: "Chain Id",
            type: "integer",
            description:
              "chain network id, \n    see [list of details](https://docs.chainbase.com/reference/supported-chains)\n    ",
            examples: ["1"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          address: {
            title: "Address",
            pattern: "^0[xX]{1}[a-fA-F0-9]{40}$",
            type: "string",
            description: "A hex string referencing a wallet address",
            examples: ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          from_block: {
            title: "From Block",
            type: "string",
            description: "Inclusive from block number (hex string or int)",
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          to_block: {
            title: "To Block",
            type: "string",
            description:
              "Inclusive to block number (hex string, int, or 'latest')",
            examples: ["latest"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          from_timestamp: {
            title: "From Timestamp",
            type: "integer",
            description: "Inclusive from block number (hex string or int)",
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          end_timestamp: {
            title: "End Timestamp",
            type: "integer",
            description: "Inclusive end timestamp",
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          page: {
            title: "Page",
            minimum: 1,
            type: "integer",
            description: "The page offset",
            default: 1,
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          limit: {
            title: "Limit",
            maximum: 100,
            minimum: 1,
            type: "integer",
            description: "The desired page size limit. Less or equal than 100",
            default: 20,
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["chain_id", "address"],
      },
      {
        type: "object",
        properties: {
          "x-api-key": {
            title: "X-Api-Key",
            type: "string",
            examples: ["demo"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["x-api-key"],
      },
    ],
  },
  response: {
    "200": {
      title: "ResponseGetAccountTxs",
      required: ["data"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer", default: 0 },
        message: { title: "Message", type: "string", default: "success" },
        data: {
          title: "Data",
          type: "array",
          items: {
            title: "TxDetail",
            required: [
              "type",
              "status",
              "block_number",
              "block_timestamp",
              "transaction_hash",
              "transaction_index",
              "from_address",
              "to_address",
              "value",
              "input",
              "nonce",
              "contract_address",
              "gas",
              "gas_price",
              "gas_used",
              "effective_gas_price",
              "cumulative_gas_used",
              "max_fee_per_gas",
              "max_priority_fee_per_gas",
              "tx_fee",
              "saving_fee",
              "burnt_fee",
            ],
            type: "object",
            properties: {
              type: { title: "Type", type: "integer" },
              status: { title: "Status", type: "integer" },
              block_number: { title: "Block Number", type: "integer" },
              block_timestamp: { title: "Block Timestamp", type: "string" },
              transaction_hash: { title: "Transaction Hash", type: "string" },
              transaction_index: {
                title: "Transaction Index",
                type: "integer",
              },
              from_address: { title: "From Address", type: "string" },
              to_address: { title: "To Address", type: "string" },
              value: { title: "Value", type: "string" },
              input: { title: "Input", type: "string" },
              nonce: { title: "Nonce", type: "string" },
              contract_address: { title: "Contract Address", type: "string" },
              gas: { title: "Gas", type: "integer" },
              gas_price: { title: "Gas Price", type: "integer" },
              gas_used: { title: "Gas Used", type: "integer" },
              effective_gas_price: {
                title: "Effective Gas Price",
                type: "integer",
              },
              cumulative_gas_used: {
                title: "Cumulative Gas Used",
                type: "integer",
              },
              max_fee_per_gas: { title: "Max Fee Per Gas", type: "integer" },
              max_priority_fee_per_gas: {
                title: "Max Priority Fee Per Gas",
                type: "integer",
              },
              tx_fee: { title: "Tx Fee", type: "integer" },
              saving_fee: { title: "Saving Fee", type: "integer" },
              burnt_fee: { title: "Burnt Fee", type: "integer" },
            },
          },
        },
        next_page: { title: "Next Page", type: "integer" },
        count: { title: "Count", type: "integer" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "400": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "401": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "403": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "404": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "422": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "500": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
  },
} as const;
const GetBlockDetail = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          chain_id: {
            title: "Chain Id",
            type: "integer",
            description:
              "chain network id, \n    see [list of details](https://docs.chainbase.com/reference/supported-chains)\n    ",
            examples: ["1"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          number: {
            title: "Number",
            type: "string",
            description: "Block number",
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["chain_id", "number"],
      },
      {
        type: "object",
        properties: {
          "x-api-key": {
            title: "X-Api-Key",
            type: "string",
            examples: ["demo"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["x-api-key"],
      },
    ],
  },
  response: {
    "200": {
      title: "ResponseGetBlockDetail",
      required: ["data"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer", default: 0 },
        message: { title: "Message", type: "string", default: "success" },
        data: {
          title: "BlockDetail",
          required: [
            "number",
            "hash",
            "parent_hash",
            "timestamp",
            "difficulty",
            "extra_data",
            "gas_limit",
            "gas_used",
            "base_fee_per_gas",
            "miner",
            "mix_hash",
            "nonce",
            "receipts_root",
            "sha3_uncles",
            "size",
            "state_root",
            "transactions_root",
            "transactions_count",
            "uncles_count",
          ],
          type: "object",
          properties: {
            number: { title: "Number", type: "integer" },
            hash: { title: "Hash", type: "string" },
            parent_hash: { title: "Parent Hash", type: "string" },
            timestamp: { title: "Timestamp", type: "string" },
            difficulty: { title: "Difficulty", type: "string" },
            extra_data: { title: "Extra Data", type: "string" },
            gas_limit: { title: "Gas Limit", type: "integer" },
            gas_used: { title: "Gas Used", type: "integer" },
            base_fee_per_gas: { title: "Base Fee Per Gas", type: "integer" },
            miner: { title: "Miner", type: "string" },
            mix_hash: { title: "Mix Hash", type: "string" },
            nonce: { title: "Nonce", type: "string" },
            receipts_root: { title: "Receipts Root", type: "string" },
            sha3_uncles: { title: "Sha3 Uncles", type: "string" },
            size: { title: "Size", type: "integer" },
            state_root: { title: "State Root", type: "string" },
            transactions_root: { title: "Transactions Root", type: "string" },
            transactions_count: {
              title: "Transactions Count",
              type: "integer",
            },
            uncles_count: { title: "Uncles Count", type: "integer" },
          },
        },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "400": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "401": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "403": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "404": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "422": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "500": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
  },
} as const;
const GetBlockNumberLatest = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          chain_id: {
            title: "Chain Id",
            type: "integer",
            description:
              "chain network id, \n    see [list of details](https://docs.chainbase.com/reference/supported-chains)\n    ",
            examples: ["1"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["chain_id"],
      },
      {
        type: "object",
        properties: {
          "x-api-key": {
            title: "X-Api-Key",
            type: "string",
            examples: ["demo"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["x-api-key"],
      },
    ],
  },
  response: {
    "200": {
      title: "ResponseGetLastBlockNumber",
      required: ["data"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer", default: 0 },
        message: { title: "Message", type: "string", default: "success" },
        data: {
          title: "GetLastBlockNumberData",
          required: ["number", "hash"],
          type: "object",
          properties: {
            number: { title: "Number", type: "integer" },
            hash: { title: "Hash", type: "string" },
          },
        },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "400": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "401": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "403": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "404": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "422": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "500": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
  },
} as const;
const GetContractEvents = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          chain_id: {
            title: "Chain Id",
            type: "integer",
            description:
              "chain network id, \n    see [list of details](https://docs.chainbase.com/reference/supported-chains)\n    ",
            examples: ["1"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          contract_address: {
            title: "Contract Address",
            pattern: "^0[xX]{1}[a-fA-F0-9]{40}$",
            type: "string",
            description: "A hex string referencing a contract address",
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          from_block: {
            title: "From Block",
            type: "string",
            description: "Inclusive from block number (hex string or int)",
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          to_block: {
            title: "To Block",
            type: "string",
            description:
              "Inclusive to block number (hex string, int, or 'latest')",
            examples: ["latest"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          from_timestamp: {
            title: "From Timestamp",
            type: "integer",
            description: "Inclusive start timestamp",
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          end_timestamp: {
            title: "End Timestamp",
            type: "integer",
            description: "Inclusive end timestamp",
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          page: {
            title: "Page",
            minimum: 1,
            type: "integer",
            description: "The page offset",
            default: 1,
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          limit: {
            title: "Limit",
            maximum: 100,
            minimum: 1,
            type: "integer",
            description: "The desired page size limit. Less or equal than 100",
            default: 20,
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["chain_id", "contract_address"],
      },
      {
        type: "object",
        properties: {
          "x-api-key": {
            title: "X-Api-Key",
            type: "string",
            examples: ["demo"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["x-api-key"],
      },
    ],
  },
  response: {
    "200": {
      title: "ResponseContractEvents",
      required: ["data"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer", default: 0 },
        message: { title: "Message", type: "string", default: "success" },
        data: {
          title: "Data",
          type: "array",
          items: {
            title: "ContractEventsData",
            required: [
              "block_number",
              "function",
              "method_id",
              "transaction_hash",
              "transaction_index",
            ],
            type: "object",
            properties: {
              block_number: { title: "Block Number", type: "integer" },
              function: { title: "Function", type: "string" },
              method_id: { title: "Method Id", type: "string" },
              transaction_hash: { title: "Transaction Hash", type: "string" },
              transaction_index: {
                title: "Transaction Index",
                type: "integer",
              },
            },
          },
        },
        next_page: { title: "Next Page", type: "integer" },
        count: { title: "Count", type: "integer" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "400": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "401": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "403": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "404": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "422": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "500": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
  },
} as const;
const GetTxDetail = {
  metadata: {
    allOf: [
      {
        type: "object",
        properties: {
          chain_id: {
            title: "Chain Id",
            type: "integer",
            description:
              "chain network id, \n    see [list of details](https://docs.chainbase.com/reference/supported-chains)\n    ",
            examples: ["1"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          hash: {
            title: "Hash",
            type: "string",
            description: "The transaction hash",
            examples: [
              "0xea1093d492a1dcb1bef708f771a99a96ff05dcab81ca76c31940300177fcf49f",
            ],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          block_number: {
            title: "Block Number",
            type: "integer",
            description: "Block number of the transaction",
            $schema: "http://json-schema.org/draft-04/schema#",
          },
          tx_index: {
            title: "Tx Index",
            type: "integer",
            description: "Index of the transaction",
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["chain_id"],
      },
      {
        type: "object",
        properties: {
          "x-api-key": {
            title: "X-Api-Key",
            type: "string",
            examples: ["demo"],
            $schema: "http://json-schema.org/draft-04/schema#",
          },
        },
        required: ["x-api-key"],
      },
    ],
  },
  response: {
    "200": {
      title: "ResponseGetTxDetail",
      required: ["data"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer", default: 0 },
        message: { title: "Message", type: "string", default: "success" },
        data: {
          title: "TxDetail",
          required: [
            "type",
            "status",
            "block_number",
            "block_timestamp",
            "transaction_hash",
            "transaction_index",
            "from_address",
            "to_address",
            "value",
            "input",
            "nonce",
            "contract_address",
            "gas",
            "gas_price",
            "gas_used",
            "effective_gas_price",
            "cumulative_gas_used",
            "max_fee_per_gas",
            "max_priority_fee_per_gas",
            "tx_fee",
            "saving_fee",
            "burnt_fee",
          ],
          type: "object",
          properties: {
            type: { title: "Type", type: "integer" },
            status: { title: "Status", type: "integer" },
            block_number: { title: "Block Number", type: "integer" },
            block_timestamp: { title: "Block Timestamp", type: "string" },
            transaction_hash: { title: "Transaction Hash", type: "string" },
            transaction_index: { title: "Transaction Index", type: "integer" },
            from_address: { title: "From Address", type: "string" },
            to_address: { title: "To Address", type: "string" },
            value: { title: "Value", type: "string" },
            input: { title: "Input", type: "string" },
            nonce: { title: "Nonce", type: "string" },
            contract_address: { title: "Contract Address", type: "string" },
            gas: { title: "Gas", type: "integer" },
            gas_price: { title: "Gas Price", type: "integer" },
            gas_used: { title: "Gas Used", type: "integer" },
            effective_gas_price: {
              title: "Effective Gas Price",
              type: "integer",
            },
            cumulative_gas_used: {
              title: "Cumulative Gas Used",
              type: "integer",
            },
            max_fee_per_gas: { title: "Max Fee Per Gas", type: "integer" },
            max_priority_fee_per_gas: {
              title: "Max Priority Fee Per Gas",
              type: "integer",
            },
            tx_fee: { title: "Tx Fee", type: "integer" },
            saving_fee: { title: "Saving Fee", type: "integer" },
            burnt_fee: { title: "Burnt Fee", type: "integer" },
          },
        },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "400": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "401": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "403": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "404": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "422": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
    "500": {
      title: "ErrorMessage",
      required: ["code", "message"],
      type: "object",
      properties: {
        code: { title: "Code", type: "integer" },
        message: { title: "Message", type: "string" },
      },
      $schema: "http://json-schema.org/draft-04/schema#",
    },
  },
} as const;
export {
  ContractCall,
  GetAccountTxs,
  GetBlockDetail,
  GetBlockNumberLatest,
  GetContractEvents,
  GetTxDetail,
};

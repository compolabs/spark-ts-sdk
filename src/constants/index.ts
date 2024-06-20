import { OrderbookContracts } from "src/interface";

export const DEFAULT_DECIMALS = 9;

export const DEFAULT_GAS_PRICE = "1";
export const DEFAULT_GAS_LIMIT_MULTIPLIER = "2";

export const BETA_CONTRACT_ADDRESSES: OrderbookContracts = {
  market: "0x2f6abb5badbfc7eeaee02b89f36f161faffdbcabaefc0aa70a759e1e4b302fa7",
  tokenFactory:
    "0x3141a3f11e3f784364d57860e3a4dcf9b73d42e23fd49038773cefb09c633348",
  pyth: "0x3cd5005f23321c8ae0ccfa98fb07d9a5ff325c483f21d2d9540d6897007600c9",
};

export const EXPLORER_URL = "https://app.fuel.network/";

export const TESTNET_NETWORK = {
  name: "Fuel",
  url: "https://testnet.fuel.network/v1/graphql",
};

export const TESTNET_INDEXER_URL =
  "https://indexer.bigdevenergy.link/2afab9c/v1/graphql";

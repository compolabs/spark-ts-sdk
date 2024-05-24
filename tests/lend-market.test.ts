import { beforeEach, describe, expect, it } from "@jest/globals";
import { Provider, Wallet, WalletUnlocked } from "fuels";

import Spark, {
  BETA_CONTRACT_ADDRESSES,
  BETA_INDEXER_URL,
  BETA_NETWORK,
  BETA_TOKENS,
} from "../src";

import { PRIVATE_KEY_ALICE } from "./constants";

const TIMEOUT_DEADLINE = 60_000; // 1min

const TOKENS_LIST = Object.values(BETA_TOKENS).map(
  ({ decimals, assetId, symbol, priceFeed }) => ({
    address: assetId,
    symbol,
    decimals,
    priceFeed,
  }),
);

const TOKENS_BY_SYMBOL = TOKENS_LIST.reduce(
  (acc, t) => ({ ...acc, [t.symbol]: t }),
  {},
);

describe("Read Tests", () => {
  let wallet: WalletUnlocked;
  let spark: Spark;

  beforeEach(async () => {
    const provider = await Provider.create(BETA_NETWORK.url);
    wallet = Wallet.fromPrivateKey(PRIVATE_KEY_ALICE, provider);

    spark = new Spark({
      networkUrl: BETA_NETWORK.url,
      contractAddresses: BETA_CONTRACT_ADDRESSES,
      indexerApiUrl: BETA_INDEXER_URL,
      wallet,
    });
  });

  it.only("Check user collateral", async () => {
    const address = wallet.address.toAddress();
    const btc = TOKENS_BY_SYMBOL["BTC"];
    const result = await spark.fetchUserCollateral(address, btc);

    expect(result).not.toBeNull();
  });

  it("Supply 2000", async () => {
    const btc = TOKENS_BY_SYMBOL["BTC"];
    const eth = TOKENS_BY_SYMBOL["ETH"];

    const result = await spark.supplyBase(eth, "2000", btc);

    expect(result).toBeDefined();
  });

  it(
    "fetchUserSupplyBorrow",
    async () => {
      const result = await spark.fetchUserSupplyBorrow(
        wallet.address.toAddress(),
      );

      expect(result).not.toBeNull();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "fetchCollateralConfigurations",
    async () => {
      const result = await spark.fetchCollateralConfigurations();
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "fetchTotalsCollateral",
    async () => {
      const btc = TOKENS_BY_SYMBOL["BTC"];
      const result = await spark.fetchTotalsCollateral(btc);
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "fetchBalanceOfAsset",
    async () => {
      const btc = TOKENS_BY_SYMBOL["BTC"];
      const result = await spark.fetchBalanceOfAsset(btc);
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "fetchReserves",
    async () => {
      const btc = TOKENS_BY_SYMBOL["BTC"];
      const result = await spark.fetchReserves(btc);
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "fetchUserCollateral",
    async () => {
      const btc = TOKENS_BY_SYMBOL["BTC"];
      const address = wallet.address.toAddress();
      const result = await spark.fetchUserCollateral(address, btc);
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "fetchUtilization",
    async () => {
      const result = await spark.fetchUtilization();
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "fetchAvailableToBorrow",
    async () => {
      const address = wallet.address.toAddress();
      const result = await spark.fetchAvailableToBorrow(address);
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "fetchBorrowRate",
    async () => {
      const result = await spark.fetchBorrowRate("1000");
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "fetchSupplyRate",
    async () => {
      const result = await spark.fetchSupplyRate("1000");
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "withdrawBase",
    async () => {
      const address = wallet.address.toAddress();
      const btc = TOKENS_BY_SYMBOL["BTC"];
      const result = await spark.withdrawBase(btc, "1000");
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "supplyCollateral",
    async () => {
      const btc = TOKENS_BY_SYMBOL["BTC"];
      const result = await spark.supplyCollateral(btc);
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );

  it(
    "withdrawCollateral",
    async () => {
      const btc = TOKENS_BY_SYMBOL["BTC"];
      const eth = TOKENS_BY_SYMBOL["ETH"];
      const result = await spark.withdrawCollateral(eth, "1000", btc);
      expect(result).toBeDefined();
    },
    TIMEOUT_DEADLINE,
  );
});
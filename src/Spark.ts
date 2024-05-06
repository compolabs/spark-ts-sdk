import { Provider, Wallet, WalletLocked, WalletUnlocked } from "fuels";

import BN from "./utils/BN";
import { NETWORK_ERROR, NetworkError } from "./utils/NetworkError";
import { DEFAULT_GAS_LIMIT_MULTIPLIER, DEFAULT_GAS_PRICE } from "./constants";
import {
  Asset,
  FetchOrdersParams,
  FetchTradesParams,
  MarketCreateEvent,
  Options,
  OptionsSpark,
  PerpAllTraderPosition,
  PerpMarket,
  PerpMaxAbsPositionSize,
  PerpPendingFundingPayment,
  PerpTrades,
  SparkParams,
  SpotMarketVolume,
  SpotOrder,
  SpotOrderWithoutTimestamp,
  SpotTrades,
  WriteTransactionResponse,
} from "./interface";
import { ReadActions } from "./ReadActions";
import { WriteActions } from "./WriteActions";

export class Spark {
  private write = new WriteActions();

  private read: ReadActions;

  private providerPromise: Promise<Provider>;
  private options: OptionsSpark;

  constructor(params: SparkParams) {
    this.options = {
      contractAddresses: params.contractAddresses,
      wallet: params.wallet,
      gasPrice: params.gasPrice ?? DEFAULT_GAS_PRICE,
      gasLimitMultiplier:
        params.gasLimitMultiplier ?? DEFAULT_GAS_LIMIT_MULTIPLIER,
    };

    this.read = new ReadActions(params.indexerApiUrl);

    this.providerPromise = Provider.create(params.networkUrl);
  }

  setActiveWallet = (wallet?: WalletLocked | WalletUnlocked) => {
    const newOptions = { ...this.options };
    newOptions.wallet = wallet;
    this.options = newOptions;
  };

  createSpotOrder = async (
    baseToken: Asset,
    quoteToken: Asset,
    size: string,
    price: string,
  ): Promise<WriteTransactionResponse> => {
    return this.write.createSpotOrder(
      baseToken,
      quoteToken,
      size,
      price,
      this.getApiOptions(),
    );
  };

  cancelSpotOrder = async (
    orderId: string,
  ): Promise<WriteTransactionResponse> => {
    return this.write.cancelSpotOrder(orderId, this.getApiOptions());
  };

  matchSpotOrders = async (
    sellOrderId: string,
    buyOrderId: string,
  ): Promise<WriteTransactionResponse> => {
    return this.write.matchSpotOrders(
      sellOrderId,
      buyOrderId,
      this.getApiOptions(),
    );
  };

  mintToken = async (
    token: Asset,
    amount: string,
  ): Promise<WriteTransactionResponse> => {
    return this.write.mintToken(token, amount, this.getApiOptions());
  };

  depositPerpCollateral = async (
    asset: Asset,
    amount: string,
  ): Promise<WriteTransactionResponse> => {
    return this.write.depositPerpCollateral(
      asset.address,
      amount,
      this.getApiOptions(),
    );
  };

  withdrawPerpCollateral = async (
    baseToken: Asset,
    gasToken: Asset,
    amount: string,
    oracleUpdateData: string[],
  ): Promise<WriteTransactionResponse> => {
    return this.write.withdrawPerpCollateral(
      baseToken.address,
      gasToken.address,
      amount,
      oracleUpdateData,
      this.getApiOptions(),
    );
  };

  openPerpOrder = async (
    baseToken: Asset,
    gasToken: Asset,
    amount: string,
    price: string,
    updateData: string[],
  ): Promise<WriteTransactionResponse> => {
    return this.write.openPerpOrder(
      baseToken.address,
      gasToken.address,
      amount,
      price,
      updateData,
      this.getApiOptions(),
    );
  };

  removePerpOrder = async (
    assetId: string,
  ): Promise<WriteTransactionResponse> => {
    return this.write.removePerpOrder(assetId, this.getApiOptions());
  };

  fulfillPerpOrder = async (
    gasToken: Asset,
    orderId: string,
    amount: string,
    updateData: string[],
  ): Promise<WriteTransactionResponse> => {
    return this.write.fulfillPerpOrder(
      gasToken.address,
      orderId,
      amount,
      updateData,
      this.getApiOptions(),
    );
  };

  fetchSpotMarkets = async (limit: number): Promise<MarketCreateEvent[]> => {
    return this.read.fetchSpotMarkets(limit);
  };

  fetchSpotMarketPrice = async (baseToken: Asset): Promise<BN> => {
    return this.read.fetchSpotMarketPrice(baseToken.address);
  };

  fetchSpotOrders = async (params: FetchOrdersParams): Promise<SpotOrder[]> => {
    return this.read.fetchSpotOrders(params);
  };

  fetchSpotTrades = async (
    params: FetchTradesParams,
  ): Promise<SpotTrades[]> => {
    return this.read.fetchSpotTrades(params);
  };

  fetchSpotVolume = async (): Promise<SpotMarketVolume> => {
    return this.read.fetchSpotVolume();
  };

  fetchSpotOrderById = async (
    orderId: string,
  ): Promise<SpotOrderWithoutTimestamp | undefined> => {
    const options = await this.getFetchOptions();

    return this.read.fetchSpotOrderById(orderId, options);
  };

  fetchPerpTrades = async (
    params: FetchTradesParams,
  ): Promise<PerpTrades[]> => {
    return this.read.fetchPerpTradeEvents(params);
  };

  fetchPerpCollateralBalance = async (
    accountAddress: string,
    asset: Asset,
  ): Promise<BN> => {
    const options = await this.getFetchOptions();

    return this.read.fetchPerpCollateralBalance(
      accountAddress,
      asset.address,
      options,
    );
  };

  fetchPerpAllTraderPositions = async (
    accountAddress: string,
    assetAddress: string,
    limit: number,
  ): Promise<PerpAllTraderPosition[]> => {
    const options = await this.getFetchOptions();

    return this.read.fetchPerpAllTraderPositions(
      accountAddress,
      assetAddress,
      limit,
      options,
    );
  };

  fetchPerpIsAllowedCollateral = async (asset: Asset): Promise<boolean> => {
    const options = await this.getFetchOptions();

    return this.read.fetchPerpIsAllowedCollateral(asset.address, options);
  };

  fetchPerpTraderOrders = async (
    accountAddress: string,
    asset: Asset,
    isOpened?: boolean,
    orderType?: "buy" | "sell",
  ) => {
    const options = await this.getFetchOptions();

    return this.read.fetchPerpTraderOrders(
      accountAddress,
      asset.address,
      options,
      isOpened,
      orderType,
    );
  };

  fetchPerpAllMarkets = async (
    assetList: Asset[],
    quoteAsset: Asset,
  ): Promise<PerpMarket[]> => {
    const options = await this.getFetchOptions();

    return this.read.fetchPerpAllMarkets(assetList, quoteAsset, options);
  };

  fetchPerpFundingRate = async (asset: Asset): Promise<BN> => {
    const options = await this.getFetchOptions();

    return this.read.fetchPerpFundingRate(asset.address, options);
  };

  fetchPerpMaxAbsPositionSize = async (
    accountAddress: string,
    asset: Asset,
    tradePrice: string,
  ): Promise<PerpMaxAbsPositionSize> => {
    const options = await this.getFetchOptions();

    return this.read.fetchPerpMaxAbsPositionSize(
      accountAddress,
      asset.address,
      tradePrice,
      options,
    );
  };

  matchPerpOrders = async (
    order1Id: string,
    order2Id: string,
  ): Promise<WriteTransactionResponse> => {
    const options = await this.getFetchOptions();
    return this.write.matchPerpOrders(order1Id, order2Id, options);
  };

  fetchPerpPendingFundingPayment = async (
    accountAddress: string,
    asset: Asset,
  ): Promise<PerpPendingFundingPayment> => {
    const options = await this.getFetchOptions();

    return this.read.fetchPerpPendingFundingPayment(
      accountAddress,
      asset.address,
      options,
    );
  };

  fetchPerpMarkPrice = async (asset: Asset): Promise<BN> => {
    const options = await this.getFetchOptions();

    return this.read.fetchPerpMarkPrice(asset.address, options);
  };

  fetchWalletBalance = async (asset: Asset): Promise<string> => {
    // We use getApiOptions because we need the user's wallet
    return this.read.fetchWalletBalance(asset.address, this.getApiOptions());
  };

  getProviderWallet = async () => {
    const provider = await this.providerPromise;
    return Wallet.generate({ provider });
  };

  getProvider = async () => {
    return this.providerPromise;
  };

  private getFetchOptions = async (): Promise<Options> => {
    const providerWallet = await this.getProviderWallet();
    const options: Options = { ...this.options, wallet: providerWallet };

    return options;
  };

  private getApiOptions = (): Options => {
    if (!this.options.wallet) {
      throw new NetworkError(NETWORK_ERROR.UNKNOWN_WALLET);
    }

    return this.options as Options;
  };
}

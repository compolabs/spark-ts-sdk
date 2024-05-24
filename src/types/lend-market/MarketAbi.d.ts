/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.84.0
  Forc version: 0.56.0
  Fuel-Core version: 0.26.0
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Option, Enum, Vec } from "./common";

export enum ErrorInput { AlreadyInitialized = 'AlreadyInitialized', Paused = 'Paused', Unauthorized = 'Unauthorized', InsufficientReserves = 'InsufficientReserves', NotLiquidatable = 'NotLiquidatable', NotForSale = 'NotForSale', TooMuchSlippage = 'TooMuchSlippage', SupplyCapExceeded = 'SupplyCapExceeded', NotCollateralized = 'NotCollateralized', BorrowTooSmall = 'BorrowTooSmall', NotPermitted = 'NotPermitted', InvalidPayment = 'InvalidPayment', UnknownAsset = 'UnknownAsset', DebuggingDisabled = 'DebuggingDisabled' };
export enum ErrorOutput { AlreadyInitialized = 'AlreadyInitialized', Paused = 'Paused', Unauthorized = 'Unauthorized', InsufficientReserves = 'InsufficientReserves', NotLiquidatable = 'NotLiquidatable', NotForSale = 'NotForSale', TooMuchSlippage = 'TooMuchSlippage', SupplyCapExceeded = 'SupplyCapExceeded', NotCollateralized = 'NotCollateralized', BorrowTooSmall = 'BorrowTooSmall', NotPermitted = 'NotPermitted', InvalidPayment = 'InvalidPayment', UnknownAsset = 'UnknownAsset', DebuggingDisabled = 'DebuggingDisabled' };

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type CollateralConfigurationInput = { asset_id: string, price_feed: string, decimals: BigNumberish, borrow_collateral_factor: BigNumberish, liquidate_collateral_factor: BigNumberish, liquidation_penalty: BigNumberish, supply_cap: BigNumberish, paused: boolean };
export type CollateralConfigurationOutput = { asset_id: string, price_feed: string, decimals: number, borrow_collateral_factor: BN, liquidate_collateral_factor: BN, liquidation_penalty: BN, supply_cap: BN, paused: boolean };
export type CollateralConfigurationEventInput = { configuration: CollateralConfigurationInput };
export type CollateralConfigurationEventOutput = { configuration: CollateralConfigurationOutput };
export type I64Input = { value: BigNumberish, negative: boolean };
export type I64Output = { value: BN, negative: boolean };
export type MarketBasicsInput = { base_supply_index: BigNumberish, base_borrow_index: BigNumberish, tracking_supply_index: BigNumberish, tracking_borrow_index: BigNumberish, total_supply_base: BigNumberish, total_borrow_base: BigNumberish, last_accrual_time: BigNumberish };
export type MarketBasicsOutput = { base_supply_index: BN, base_borrow_index: BN, tracking_supply_index: BN, tracking_borrow_index: BN, total_supply_base: BN, total_borrow_base: BN, last_accrual_time: BN };
export type MarketConfigurationInput = { governor: AddressInput, pause_guardian: AddressInput, base_token: string, base_token_decimals: BigNumberish, base_token_price_feed: string, kink: BigNumberish, supply_per_second_interest_rate_slope_low: BigNumberish, supply_per_second_interest_rate_slope_high: BigNumberish, borrow_per_second_interest_rate_slope_low: BigNumberish, borrow_per_second_interest_rate_slope_high: BigNumberish, borrow_per_second_interest_rate_base: BigNumberish, store_front_price_factor: BigNumberish, base_tracking_supply_speed: BigNumberish, base_tracking_borrow_speed: BigNumberish, base_min_for_rewards: BigNumberish, base_borrow_min: BigNumberish, target_reserves: BigNumberish };
export type MarketConfigurationOutput = { governor: AddressOutput, pause_guardian: AddressOutput, base_token: string, base_token_decimals: number, base_token_price_feed: string, kink: BN, supply_per_second_interest_rate_slope_low: BN, supply_per_second_interest_rate_slope_high: BN, borrow_per_second_interest_rate_slope_low: BN, borrow_per_second_interest_rate_slope_high: BN, borrow_per_second_interest_rate_base: BN, store_front_price_factor: BN, base_tracking_supply_speed: BN, base_tracking_borrow_speed: BN, base_min_for_rewards: BN, base_borrow_min: BN, target_reserves: BN };
export type PauseConfigurationInput = { supply_paused: boolean, withdraw_paused: boolean, absorb_paused: boolean, buy_paused: boolean, claim_paused: boolean };
export type PauseConfigurationOutput = PauseConfigurationInput;
export type UserBasicInput = { principal: I64Input, base_tracking_index: BigNumberish, base_tracking_accrued: BigNumberish, reward_claimed: BigNumberish };
export type UserBasicOutput = { principal: I64Output, base_tracking_index: BN, base_tracking_accrued: BN, reward_claimed: BN };
export type UserBasicEventInput = { user_basic: UserBasicInput, address: AddressInput };
export type UserBasicEventOutput = { user_basic: UserBasicOutput, address: AddressOutput };
export type UserCollateralEventInput = { address: AddressInput, asset_id: string, amount: BigNumberish };
export type UserCollateralEventOutput = { address: AddressOutput, asset_id: string, amount: BN };

export type MarketAbiConfigurables = {
  PYTH_CONTRACT_ADDRESS: AddressInput;
  MARKET_CONFIGURATION: Option;
  DEBUG_STEP: Option;
};

interface MarketAbiInterface extends Interface {
  functions: {
    absorb: FunctionFragment;
    add_collateral_asset: FunctionFragment;
    available_to_borrow: FunctionFragment;
    balance_of: FunctionFragment;
    buy_collateral: FunctionFragment;
    claim: FunctionFragment;
    collateral_value_to_sell: FunctionFragment;
    debug_increment_timestamp: FunctionFragment;
    get_borrow_rate: FunctionFragment;
    get_collateral_configurations: FunctionFragment;
    get_collateral_reserves: FunctionFragment;
    get_configuration: FunctionFragment;
    get_market_basics: FunctionFragment;
    get_reserves: FunctionFragment;
    get_reward_owed: FunctionFragment;
    get_reward_token_asset_id: FunctionFragment;
    get_supply_rate: FunctionFragment;
    get_user_basic: FunctionFragment;
    get_user_collateral: FunctionFragment;
    get_user_supply_borrow: FunctionFragment;
    get_utilization: FunctionFragment;
    is_liquidatable: FunctionFragment;
    pause: FunctionFragment;
    pause_collateral_asset: FunctionFragment;
    quote_collateral: FunctionFragment;
    resume_collateral_asset: FunctionFragment;
    supply_base: FunctionFragment;
    supply_collateral: FunctionFragment;
    totals_collateral: FunctionFragment;
    withdraw_base: FunctionFragment;
    withdraw_collateral: FunctionFragment;
    withdraw_reserves: FunctionFragment;
    withdraw_reward_token: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'absorb', values: [Vec<AddressInput>]): Uint8Array;
  encodeFunctionData(functionFragment: 'add_collateral_asset', values: [CollateralConfigurationInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'available_to_borrow', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'balance_of', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'buy_collateral', values: [string, BigNumberish, AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'claim', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'collateral_value_to_sell', values: [string, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'debug_increment_timestamp', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_borrow_rate', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_collateral_configurations', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_collateral_reserves', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_configuration', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_market_basics', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_reserves', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_reward_owed', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_reward_token_asset_id', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_supply_rate', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_user_basic', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_user_collateral', values: [AddressInput, string]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_user_supply_borrow', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_utilization', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'is_liquidatable', values: [AddressInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'pause', values: [PauseConfigurationInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'pause_collateral_asset', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'quote_collateral', values: [string, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'resume_collateral_asset', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'supply_base', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'supply_collateral', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'totals_collateral', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw_base', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw_collateral', values: [string, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw_reserves', values: [AddressInput, BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw_reward_token', values: [AddressInput, BigNumberish]): Uint8Array;

  decodeFunctionData(functionFragment: 'absorb', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'add_collateral_asset', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'available_to_borrow', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'balance_of', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'buy_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'claim', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'collateral_value_to_sell', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'debug_increment_timestamp', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_borrow_rate', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_collateral_configurations', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_collateral_reserves', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_configuration', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_market_basics', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_reserves', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_reward_owed', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_reward_token_asset_id', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_supply_rate', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_user_basic', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_user_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_user_supply_borrow', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_utilization', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'is_liquidatable', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'pause', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'pause_collateral_asset', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'quote_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'resume_collateral_asset', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'supply_base', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'supply_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'totals_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw_base', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw_collateral', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw_reserves', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw_reward_token', data: BytesLike): DecodedValue;
}

export class MarketAbi extends Contract {
  interface: MarketAbiInterface;
  functions: {
    absorb: InvokeFunction<[accounts: Vec<AddressInput>], void>;
    add_collateral_asset: InvokeFunction<[configuration: CollateralConfigurationInput], void>;
    available_to_borrow: InvokeFunction<[account: AddressInput], BN>;
    balance_of: InvokeFunction<[asset: string], BN>;
    buy_collateral: InvokeFunction<[asset_id: string, min_amount: BigNumberish, recipient: AddressInput], void>;
    claim: InvokeFunction<[], void>;
    collateral_value_to_sell: InvokeFunction<[asset_id: string, collateral_amount: BigNumberish], BN>;
    debug_increment_timestamp: InvokeFunction<[], void>;
    get_borrow_rate: InvokeFunction<[utilization: BigNumberish], BN>;
    get_collateral_configurations: InvokeFunction<[], Vec<CollateralConfigurationOutput>>;
    get_collateral_reserves: InvokeFunction<[asset_id: string], I64Output>;
    get_configuration: InvokeFunction<[], MarketConfigurationOutput>;
    get_market_basics: InvokeFunction<[], MarketBasicsOutput>;
    get_reserves: InvokeFunction<[], I64Output>;
    get_reward_owed: InvokeFunction<[account: AddressInput], BN>;
    get_reward_token_asset_id: InvokeFunction<[], string>;
    get_supply_rate: InvokeFunction<[utilization: BigNumberish], BN>;
    get_user_basic: InvokeFunction<[account: AddressInput], UserBasicOutput>;
    get_user_collateral: InvokeFunction<[address: AddressInput, asset_id: string], BN>;
    get_user_supply_borrow: InvokeFunction<[account: AddressInput], [BN, BN]>;
    get_utilization: InvokeFunction<[], BN>;
    is_liquidatable: InvokeFunction<[account: AddressInput], boolean>;
    pause: InvokeFunction<[pause_config: PauseConfigurationInput], void>;
    pause_collateral_asset: InvokeFunction<[asset_id: string], void>;
    quote_collateral: InvokeFunction<[asset_id: string, base_amount: BigNumberish], BN>;
    resume_collateral_asset: InvokeFunction<[asset_id: string], void>;
    supply_base: InvokeFunction<[], void>;
    supply_collateral: InvokeFunction<[], void>;
    totals_collateral: InvokeFunction<[asset_id: string], BN>;
    withdraw_base: InvokeFunction<[amount: BigNumberish], void>;
    withdraw_collateral: InvokeFunction<[asset_id: string, amount: BigNumberish], void>;
    withdraw_reserves: InvokeFunction<[to: AddressInput, amount: BigNumberish], void>;
    withdraw_reward_token: InvokeFunction<[recipient: AddressInput, amount: BigNumberish], void>;
  };
}
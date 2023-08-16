import { BigNumber } from 'ethers';

const getBigDecimals = (decimals: number) => BigNumber.from(10).pow(decimals);

export const BIG_DECIMALS = getBigDecimals(18);

export const toBigNumber = (number: number, customDecimals?: number) =>
  BigNumber.from(number)
    .mul(customDecimals ? getBigDecimals(customDecimals) : BIG_DECIMALS)
    .div(1)
    .toString();

export const fromBigNumberToSafeNumber = (bigNumber: BigNumber, customDecimals?: number) =>
  bigNumber ? bigNumber.div(customDecimals ? getBigDecimals(customDecimals) : BIG_DECIMALS).toNumber() : 0;

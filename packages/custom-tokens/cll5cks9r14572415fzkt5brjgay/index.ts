import Web3 from 'web3';
import { Project } from '../../types';
import ABI from './abi';
import config from '../../web3/config';
import { AbiItem } from 'web3-utils';
import toDecimals from '../../utils/toDecimals';
import { getPairInformationByChainId } from '../../dexscreener';

export default async function (project: Project) {
  // price: undefined,
  // marketCap: undefined,
  // pairPrice: undefined,
  // liquidity: undefined,
  // totalSupply: undefined,
  // burnedTokens: undefined,
  // txns: undefined,
  // volume: undefined,
  // fdv: undefined,
  const web3 = new Web3(project.network.url);
  const contract = new web3.eth.Contract(ABI as AbiItem[], project?.contractAddress as string);
  const decimals = await contract.methods.decimals().call({ from: config.caller });
  const totalSupplyResolved = await contract.methods.totalSupply().call({ from: config.caller });
  const priceResolved = await contract.methods.sevenUpPriceInStablecoins().call({ from: config.caller });
  const stableTokenResolved = await getPairInformationByChainId(project.network.slug, project.liquidityPair[0].address);

  const price = toDecimals(priceResolved, decimals);
  const totalSupply = toDecimals(totalSupplyResolved, decimals);
  const marketCap = price * totalSupply;
  const liquidity = marketCap;
  const pairPrice = stableTokenResolved?.at(0)?.priceUsd || undefined;

  return {
    price,
    totalSupply,
    marketCap,
    liquidity,
    pairPrice,
    burnedTokens: undefined,
    txns: undefined,
    volume: undefined,
    fdv: undefined,
  };
}

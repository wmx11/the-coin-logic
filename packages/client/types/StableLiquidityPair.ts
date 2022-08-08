import { Network } from "./Network";

export type StableLiquidityPair = {
  id: string;
  name: string;
  address: string;
  pairToken: {}
  network: Network;
}
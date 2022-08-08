export type Project = {
  id: string;
  contractAddress: string;
  pairAddress: string;
  stableLiquidityPair: {
    pairToken: {
      address: string;
    }[];
    address: string;
  };
  network: {
    url: string;
  };
  customData: [];
};

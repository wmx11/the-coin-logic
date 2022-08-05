export type CustomData = {
  label: string;
  address: string;
  abiCall?: 'getBalance' | 'balanceOf' | 'totalSupply';
  url?: string;
  value?: number | string;
  resolve?: <Tdata>(data: Tdata) => number | string | null;
}
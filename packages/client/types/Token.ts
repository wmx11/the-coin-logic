import { Network } from './Network';

export type Token = {
  id?: string;
  name?: string;
  address?: string;
  ABI?: string;
  network?: Network;
};

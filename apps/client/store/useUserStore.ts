import { User } from 'types';
import create from 'zustand';

export type UserWithOrdersCount = User & { ordersCount: number };

type UserState = {
  user: UserWithOrdersCount | null;
  setUser: (user: UserWithOrdersCount) => void;
  removeUser: () => void;
};

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
  removeUser: () => set(() => ({ user: null })),
}));

export default useUserStore;

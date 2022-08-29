import { User } from 'types';
import create from 'zustand';

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
};

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
}));

export default useUserStore;

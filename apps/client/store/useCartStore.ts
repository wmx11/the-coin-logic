import { Cart, User } from 'types';
import create from 'zustand';

type CartState = {
  cart: Cart | null;
  setCart: (cart: Cart) => void;
  removeCart: () => void;
};

const useCartStore = create<CartState>((set) => ({
  cart: null,
  setCart: (cart) => set(() => ({ cart })),
  removeCart: () => set(() => ({ cart: null })),
}));

export default useCartStore;

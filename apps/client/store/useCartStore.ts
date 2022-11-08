import { Cart } from 'types';
import create from 'zustand';

type CartState = {
  cartStore: Cart | null;
  setCartStore: (cartStore: Cart) => void;
};

const useCartState = create<CartState>((set) => ({
  cartStore: null,
  setCartStore: (cartStore) => set(() => ({ cartStore })),
}));

export default useCartState;

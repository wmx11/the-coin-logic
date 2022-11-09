import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import routes from 'routes';
import { Cart, Order } from 'types';
import useUser from './useUser';

const useCart = () => {
  const { user } = useUser();
  const [cart, setCart] = useState<Cart>();
  const [isCartUpdated, setIsCartUpdated] = useState(false);
  const [isCartCleared, setIsCartCleared] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const router = useRouter();

  const createCart = async () => {
    if (!user || cart) {
      return;
    }

    const { data } = await axios.post(routes.api.cart.createCart, { userId: user.id });

    if (!data.cart) {
      return;
    }

    setCart(data.cart);
  };

  const updateCart = async () => {
    if (!user) {
      return;
    }

    const { data } = await axios.post(routes.api.cart.updateCart, { userId: user.id });

    if (!data.cart) {
      return;
    }

    setCart(data.cart);
    setIsCartUpdated(true);
  };

  const addItem = async (sku: string) => {
    if (!cart) {
      return;
    }

    await axios.post(routes.api.cart.addItem, {
      cart,
      sku,
    });

    await updateCart();
    setIsCartCleared(false);
    setIsItemAdded(true);
  };

  const clearItems = async () => {
    if (!cart) {
      return;
    }
    await axios.post(routes.api.cart.clearCart, { cart });
    await updateCart();
    setIsCartCleared(true);
    setIsItemAdded(false);
  };

  useEffect(() => {
    updateCart();
  }, [user, isCartUpdated, isCartCleared, isItemAdded]);

  const placeOrder = async <T>(orderInfo: Record<string, T>) => {
    if (!cart || isOrderPlaced) {
      return console.error('Cart not found.');
    }

    setIsOrderPlaced(true);

    const { data } = await axios.post(routes.api.cart.placeOrder, { cart, orderInfo });

    if (!data) {
      return null;
    }

    return data.order as Order;
  };

  const addItemAndGoToCart = async (sku: string, location?: string) => {
    await addItem(sku);
    await updateCart();
    await router.push((location as string) || '/cart');
  };

  return {
    createCart,
    updateCart,
    addItem,
    clearItems,
    placeOrder,
    addItemAndGoToCart,
    cart,
    isCartUpdated,
    isCartCleared,
    isItemAdded,
    user,
  };
};

export default useCart;

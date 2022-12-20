import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import routes from 'routes';
import useCartStore from 'store/useCartStore';
import { Cart, Order } from 'types';
import { signedRequest } from 'utils/signedRequest';
import useUser from './useUser';

export type AddItemToCart = {
  sku: string;
  projectId?: string;
  paymentPlanId?: string;
};

export type AddItemAndGoToCart = {
  location?: string;
} & AddItemToCart;

const useCart = () => {
  const { user } = useUser();
  const { cart, setCart } = useCartStore((state) => state);
  const [isCartUpdated, setIsCartUpdated] = useState(false);
  const [isCartCleared, setIsCartCleared] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  const router = useRouter();

  console.log(cart);

  useEffect(() => {
    if (!cart) {
      createCart();
    }

    updateCart();
  }, [user, isCartUpdated, isCartCleared, isItemAdded, isCouponApplied]);

  const createCart = async () => {
    if (!user || cart) {
      return;
    }

    const {
      data: { data },
    } = await signedRequest({ type: 'post', url: routes.api.cart.createCart, data: { userId: user.id } }, user.id);

    if (!data.cart) {
      return;
    }

    setCart(data.cart as Cart);

    if ((data.cart as Cart).couponCode?.code) {
      setCouponCode((data.cart as Cart).couponCode?.code as string);
      setIsCouponApplied(true);
    }
  };

  const updateCart = async () => {
    if (!user) {
      return;
    }

    const {
      data: { data },
    } = await signedRequest({ type: 'post', url: routes.api.cart.updateCart, data: { userId: user.id } }, user.id);

    if (!data.cart) {
      return;
    }

    setCart(data.cart);
    setIsCartUpdated(true);

    if ((data.cart as Cart).couponCode?.code) {
      setCouponCode((data.cart as Cart).couponCode?.code as string);
      setIsCouponApplied(true);
    }
  };

  const addItem = async (data: AddItemToCart) => {
    if (!cart) {
      return;
    }

    await signedRequest(
      {
        type: 'post',
        url: routes.api.cart.addItem,
        data: {
          cart,
          ...data,
        },
      },
      user?.id as string,
    );

    await updateCart();
    setIsCartCleared(false);
    setIsItemAdded(true);
  };

  const clearItems = async () => {
    if (!cart) {
      return;
    }
    await signedRequest(
      {
        type: 'post',
        url: routes.api.cart.clearCart,
        data: {
          cart,
        },
      },
      user?.id as string,
    );
    await updateCart();
    setIsCartCleared(true);
    setIsItemAdded(false);
  };

  const applyCoupon = async ({
    couponCode,
    revoke,
    projectId,
  }: {
    couponCode: string;
    revoke?: boolean;
    projectId?: string;
  }) => {
    if (!cart || !user) {
      return;
    }

    setIsCouponApplied(false);

    try {
      await signedRequest(
        {
          type: 'post',
          url: routes.api.cart.applyCoupon,
          data: {
            cart,
            couponCode,
            revoke,
            projectId,
          },
        },
        user?.id as string,
      );

      setCouponError('');
      setIsCouponApplied(revoke ? false : true);
      if (revoke) {
        setCouponCode('');
      }
    } catch (error: any) {
      setIsCouponApplied(false);
      setCouponError((error?.response?.data?.errorMessage as string) || '');
    }
  };

  const placeOrder = async <T>(orderInfo: Record<string, T>) => {
    if (!cart || isOrderPlaced) {
      return console.error('Cart not found.');
    }

    setIsOrderPlaced(true);

    const {
      data: { data },
    } = await signedRequest(
      {
        type: 'post',
        url: routes.api.cart.placeOrder,
        data: {
          cart,
          orderInfo,
        },
      },
      user?.id as string,
    );

    if (!data) {
      return null;
    }

    return data as Order;
  };

  const addItemAndGoToCart = async (data: AddItemAndGoToCart) => {
    await addItem(data);
    await updateCart();
    await router.push((data.location as string) || '/cart');
  };

  return {
    createCart,
    updateCart,
    addItem,
    clearItems,
    placeOrder,
    addItemAndGoToCart,
    applyCoupon,
    setCouponCode,
    cart,
    isCartUpdated,
    isCartCleared,
    isCouponApplied,
    isItemAdded,
    couponCode,
    couponError,
    user,
  };
};

export default useCart;

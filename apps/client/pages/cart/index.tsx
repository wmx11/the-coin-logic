import { Button, Container, Text } from '@mantine/core';
import PaymentForm from 'components/Forms/PaymentForm';
import GrayBox from 'components/GrayBox';
import GradientTitle from 'components/Text/GradientTitle';
import useCart from 'hooks/useCart';
import Image from 'next/image';
import CryptoBuy from 'public/images/crypto_buy.svg';
import { useEffect } from 'react';
import { CartItem } from 'types';

const index = () => {
  const { cart, clearItems, updateCart, isCartUpdated, isCartCleared, isItemAdded, user } = useCart();

  useEffect(() => {
    updateCart();
  }, [isCartUpdated, isCartCleared, isItemAdded, user]);

  const item = cart?.cartItem && cart.cartItem[0];

  if (!cart || (cart?.cartItem && cart?.cartItem.length < 1)) {
    return (
      <Container className="py-10 min-h-screen flex flex-col justify-center">
        <GrayBox>Your cart is empty</GrayBox>
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <div className="flex md:flex-row flex-col gap-8 justify-between">
        <div className="flex-1">
          <div className="flex flex-col justify-between h-full">
            <div>
              <GradientTitle weight={700} order={1} className="mb-4">
                {item?.product?.name}
              </GradientTitle>
              <Text color="dimmed">{item?.product?.description}</Text>
            </div>
            <div>
              <Image src={CryptoBuy} width={400} height={400} />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <PaymentForm item={item as CartItem} />
          <div>
            <Button size="md" color="violet" variant="outline" fullWidth onClick={clearItems}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default index;

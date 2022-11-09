import { Container } from '@mantine/core';
import GrayBox from 'components/GrayBox';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren, useEffect } from 'react';

type HasSubscriptionProviderProps = {
  subscriptionCheck: (subscription: { sku: string }) => boolean;
} & PropsWithChildren;

const HasSubscriptionProvider: FC<HasSubscriptionProviderProps> = ({ subscriptionCheck, children }) => {
  const { user, subscription } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user && subscription !== null) {
      return;
    }

    if (user?.isNotChargeable) {
      return;
    }

    if (subscription && !subscriptionCheck(subscription)) {
      router.push('/');
    }
  }, [user, subscription]);

  if (subscription && !subscriptionCheck(subscription) && !user?.isNotChargeable) {
    return (
      <Container className="py-10 min-h-screen flex items-center justify-center">
        <div className="flex-1">
          <GrayBox>You are not allowed to view this content</GrayBox>
        </div>
      </Container>
    );
  }

  return <>{children}</>;
};

export default HasSubscriptionProvider;

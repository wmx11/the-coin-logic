import { Divider, Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import GradientTitle from 'components/Text/GradientTitle';
import { intervalToDuration } from 'date-fns';
import { toDays } from 'duration-fns';
import Link from 'next/link';
import { FC } from 'react';
import { BsCashCoin } from 'react-icons/bs';
import routes from 'routes';
import { User } from 'types';
import { formateDateWithHours } from 'utils/formatters';

type SubscriptionInformationProps = {
  user: User;
};

const SubscriptionInformation: FC<SubscriptionInformationProps> = ({ user }) => {
  const { subscriptionStatus } = user;

  const SubscriptionStatus = () => {
    if (!subscriptionStatus) {
      return (
        <>
          <Text>You currently have no existing subscriptions.</Text>
          <Text className="mb-2" size="xs" color="dimmed">
            If you want to use The Coin Logic tools you will need to purchase a subscription. Subscriptions are renewed
            manually.
          </Text>
          <Link href={routes.pricing} passHref>
            <GradientButton component="a">Explore products</GradientButton>
          </Link>
        </>
      );
    }

    if (!subscriptionStatus.isValid) {
      return (
        <div className="mb-2">
          <Text>Your subscription has expired.</Text>
          <Text className="mb-2" size="xs" color="dimmed">
            Your previous subscription has expired. To continue using the products you will need to manually renew your
            subscription.
          </Text>
          <Link href={routes.pricing} passHref>
            <GradientButton component="a">Renew My License</GradientButton>
          </Link>
        </div>
      );
    }

    return (
      <>
        <Text className="mb-2">
          <strong>Valid From:</strong> {formateDateWithHours(subscriptionStatus.dateFrom || '')}
        </Text>
        <Text className="mb-2">
          <strong>Valid Till:</strong> {formateDateWithHours(subscriptionStatus.dateTo || '')}
        </Text>
        <Text className="mb-2">
          <strong>Subscription Ends in: </strong>{' '}
          {toDays(
            intervalToDuration({
              start: new Date(),
              end: new Date(subscriptionStatus.dateTo),
            }),
          ).toFixed(0)}{' '}
          Days
        </Text>

        <Text className="mb-2">
          <strong>Products:</strong>{' '}
          {subscriptionStatus.products.map((item: { name: string }, index: number) => (
            <span key={`product_${index}`}>
              {item.name}
              {index + 1 < subscriptionStatus.products.length ? ', ' : ''}
            </span>
          ))}
        </Text>
      </>
    );
  };

  return (
    <div className="mb-10">
      <GradientTitle order={3} className="flex gap-2 items-center mb-2">
        <BsCashCoin size={15} className="text-violet" />
        Subscriptions
      </GradientTitle>

      <Divider size={1} className="my-2" />

      <SubscriptionStatus />
    </div>
  );
};

export default SubscriptionInformation;

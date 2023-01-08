import { Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { QUERY_PAYMENT_PLAN_ID } from 'constants/general';
import useRequireLogin from 'hooks/useRequireLogin';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import routes from 'routes';
import { PaymentPlan } from 'types';
import toCurrency from 'utils/toCurrency';

type PaymentPlansProps = {
  paymentPlans: PaymentPlan[];
};

const PaymentPlans: FC<PaymentPlansProps> = ({ paymentPlans }) => {
  const { requireLogin } = useRequireLogin();
  const router = useRouter();

  return (
    <>
      <div className="mb-8 text-center">
        <GradientTitle order={2}>Choose from our available project listing plans</GradientTitle>
        <Text size="sm" color="dimmed">
          Our payment plans help any project get involved with The Coin Logic. Starting from a free Copper all the way
          up to our premium Palladium tier. Payment plans are applied to project listings. You can also upgrade at any
          time from your project's page.
        </Text>
      </div>

      <div className="flex gap-4 justify-between my-4 flex-wrap">
        {paymentPlans.map((plan, index) => {
          return (
            <Paper className="flex-1 flex flex-col justify-between gap-2 " withBorder key={`paymentPlan_${index}`}>
              <div>
                <Text weight={600} size="xl">
                  {plan.name}
                </Text>
                <GradientText weight={600}>Price: {toCurrency(plan.price || 0) || '$0'}</GradientText>
                <Text size="xs" color="dimmed" className="whitespace-pre-wrap mt-2">
                  {plan.description}
                </Text>
              </div>
              <GradientButton
                size="xs"
                onClick={() => {
                  if (requireLogin()) {
                    return false;
                  }

                  router.push(`${routes.addProject}?${QUERY_PAYMENT_PLAN_ID}=${plan.id}`);
                }}
              >
                Get {plan.name} Plan
              </GradientButton>
            </Paper>
          );
        })}
      </div>
    </>
  );
};

export default PaymentPlans;

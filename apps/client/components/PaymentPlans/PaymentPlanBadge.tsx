import { Badge, BadgeProps, Tooltip } from '@mantine/core';
import React, { FC } from 'react';
import { PaymentPlan } from 'types';
import { Icons } from 'utils/icons';
import { paymentPlans } from 'utils/paymentPlans/config';

type PaymentPlanBadgeProps = {
  paymentPlan: PaymentPlan;
  badgeProps?: BadgeProps;
};

const PaymentPlanBadge: FC<PaymentPlanBadgeProps> = ({ paymentPlan, badgeProps }) => {
  if (!paymentPlan) {
    return null;
  }

  const planConfig = paymentPlan ? paymentPlans[paymentPlan.slug as keyof typeof paymentPlans] : undefined;

  return (
    <Tooltip label={paymentPlan?.tooltip}>
      <Badge {...badgeProps} variant="filled" styles={{ root: { backgroundColor: planConfig?.color, color: '#000' } }}>
        {paymentPlan?.name}
      </Badge>
    </Tooltip>
  );
};

export default PaymentPlanBadge;

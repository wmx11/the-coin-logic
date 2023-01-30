import { MantineSize, Select, Text } from '@mantine/core';
import { QUERY_PAYMENT_PLAN_ID } from 'constants/general';
import { getPaymentPlans } from 'data/getters/paymentPlans';
import { useRouter } from 'next/router';
import React, { FC, forwardRef, useEffect, useState } from 'react';
import { PaymentPlan } from 'types';
import toCurrency from 'utils/toCurrency';

type PaymentPlansSelectItemProps = {
  label: string;
  description: string;
  price: number;
};

type PaymentPlansSelectProps = {
  label?: string;
  size?: MantineSize;
  currentPlan?: PaymentPlan;
  onChange?: (value: string) => void;
  description?: string;
  disabled?: boolean;
};

export const PaymentPlansSelectItem = forwardRef<HTMLDivElement, PaymentPlansSelectItemProps>(
  ({ label, description, price, ...others }: PaymentPlansSelectItemProps, ref) => (
    <div ref={ref} {...others}>
      <div className="flex gap-2 items-end">
        <Text weight={700}>{label}</Text>
        <Text size="xs">{toCurrency(price || 0)}</Text>
      </div>
      <Text size="xs">{description}</Text>
    </div>
  ),
);

const PaymentPlansSelect: FC<PaymentPlansSelectProps> = ({
  label,
  size,
  onChange,
  description,
  currentPlan,
  disabled,
}) => {
  const [data, setData] = useState<PaymentPlan[]>();
  const [value, setValue] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    getPaymentPlans().then((data) => {
      const orderedData = [...data].sort((a, b) => (a.price as number) - (b.price as number));

      setValue((router.query[QUERY_PAYMENT_PLAN_ID] as string) || null);

      if (currentPlan) {
        const filteredData = orderedData.filter((item) => item.price > (currentPlan?.price as number));
        setData(filteredData);
        return;
      }

      setData(orderedData);
    });
  }, []);

  if (!data?.length) {
    return (
      <Text size="xs" color="dimmed">
        You already have the top-tier plan.
      </Text>
    );
  }

  return (
    <Select
      itemComponent={PaymentPlansSelectItem}
      value={value}
      onChange={(value) => {
        setValue(value);
        onChange && onChange(value as string);
      }}
      data={
        data
          ? data.map((item) => ({
              label: item.name as string,
              value: item.id,
              price: currentPlan ? (item?.price as number) - (currentPlan?.price as number) : (item?.price as number),
              description: item.tooltip as string,
            }))
          : []
      }
      label={label || 'Select a plan'}
      placeholder="Copper / Silver / Gold ..."
      description={description}
      size={size}
      disabled={disabled}
      clearable
    />
  );
};

export default PaymentPlansSelect;

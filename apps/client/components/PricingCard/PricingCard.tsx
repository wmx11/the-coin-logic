import { Button, ButtonVariant, List, Text, Title } from '@mantine/core';
import React, { FC } from 'react';
import { FaCheck } from 'react-icons/fa';

type PricingCardProps = {
  label: string;
  price: string;
  description: string;
  offers: string[];
  cta: string;
  onClick?: () => void;
  styles?: {
    cta?: string;
    ctaVariant?: string;
    ctaColor?: string;
    cardBody?: string;
    label?: string;
    price?: string;
    description?: string;
    offer?: string;
    offerIcon?: string;
  };
};

const PricingCard: FC<PricingCardProps> = ({ label, price, description, offers, cta, styles, onClick }) => {
  return (
    <div
      className={`border rounded-md py-5 px-8 shadow-md min-w-[280px] md:max-w-[300px] w-full flex flex-col justify-between ${styles?.cardBody}`}
    >
      <div className="mb-8">
        <div className="mb-6">
          <Title order={1} className={` ${styles?.label || 'text-violet'}`}>
            {label}
          </Title>
          <Title order={4} className={`mb-4 ${styles?.price}`}>
            {price}
          </Title>
          <Text size="xs" color="dimmed" className={`${styles?.description}`}>
            {description}
          </Text>
        </div>

        {offers && (
          <List spacing="xs" size="sm" center icon={<FaCheck className={`${styles?.offerIcon || 'text-violet'}`} />}>
            {offers.map((offer, index) => {
              return (
                <List.Item key={`${offer}_${index}`} className={`${styles?.offer}`}>
                  {offer}
                </List.Item>
              );
            })}
          </List>
        )}
      </div>
      <div className="text-center">
        <Button
          fullWidth
          color={`${styles?.ctaColor || 'violet'}`}
          variant={`${(styles?.ctaVariant as ButtonVariant) || 'outline'}`}
          className={`${styles?.cta}`}
          onClick={onClick}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;

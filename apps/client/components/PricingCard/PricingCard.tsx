import { Button, ButtonVariant, List, Text, Title } from '@mantine/core';
import Paper from 'components/Paper';
import Image from 'next/image';
import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';

type PricingCardProps = {
  label: string;
  price: string;
  description: string;
  offers: string;
  cta: string;
  onClick?: () => void;
  disabled?: boolean;
  image?: string;
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

const PricingCard: FC<PricingCardProps> = ({
  label,
  price,
  description,
  offers,
  cta,
  styles,
  onClick,
  disabled,
  image,
}) => {
  return (
    <Paper className={`p-5 flex flex-col justify-between ${styles?.cardBody}`} withBorder>
      <div className="mb-8 flex gap-4 flex-wrap">
        <div className="mb-6 md:max-w-[50%] flex-1">
          <Title order={1} className={`${styles?.label || 'text-violet'} text-md md:text-5xl mb-4`}>
            {label}
          </Title>
          <Title order={4} className={`mb-2 ${styles?.price} bg-white/20 rounded-md p-2`}>
            {price}
          </Title>
          <Text size="xs" color="dimmed" className={`mb-4 ${styles?.description}`}>
            {description}
          </Text>
        </div>

        <div className='flex-1'>
          {offers && (
            <List spacing="xs" size="sm" center icon={<FaCheck className={`${styles?.offerIcon || 'text-violet'}`} />}>
              {offers?.split(',').map((offer, index) => {
                return (
                  <List.Item key={`${offer}_${index}`} className={`${styles?.offer}`}>
                    {offer}
                  </List.Item>
                );
              })}
            </List>
          )}
        </div>
      </div>

      <div className="text-center">
        <div className="backdrop-blur-md p-2 rounded-md bg-white/20">
          <Image src={image as string} width={200} height={200} />
        </div>

        <Button
          fullWidth
          color={`${styles?.ctaColor || 'violet'}`}
          variant={`${(styles?.ctaVariant as ButtonVariant) || 'outline'}`}
          className={`mt-4 ${styles?.cta}`}
          onClick={onClick}
          size="md"
          disabled={disabled}
        >
          {cta}
        </Button>
      </div>
    </Paper>
  );
};

export default PricingCard;

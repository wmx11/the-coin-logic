import PricingCard from 'components/PricingCard';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Product } from 'types';
import { products as productsSku } from 'types/Products';
import Regular from 'public/images/regular_product.svg';

type RegularPricingProps = {
  products: Product[];
};

const RegularPricing: FC<RegularPricingProps> = ({ products }) => {
  const router = useRouter();
  const product = products.find((item) => item.sku === productsSku.sku.regular);

  if (!product) {
    return null;
  }

  const { label, priceLabel, description, offers } = product;

  return (
    <PricingCard
      image={Regular}
      label={label as string}
      price={priceLabel as string}
      description={description as string}
      offers={offers as string}
      onClick={() => router.replace('/projects')}
      cta={'Explore Projects'}
    />
  );
};

export default RegularPricing;

import { Container } from '@mantine/core';
import Meta from 'components/Meta';
import { getProducts } from 'data/getters/product';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { PaymentPlan, Product } from 'types';
import { getIpAddress } from 'utils/utils';
import PaymentPlans from 'views/pricing/PaymentPlans';
import Products from 'views/pricing/Products';
import prisma from '../../data/prisma';

type Props = {
  products: Product[];
  paymentPlans: PaymentPlan[];
  usersWithTheSameIp: { id: string }[];
};

const index: FC<Props> = ({ products, paymentPlans, usersWithTheSameIp }) => {
  return (
    <>
      <Meta
        title="Crypto, DeFi, NFT Listing, Tracking, Analytics | Coin Logic"
        description="TheCoinLogic provides services & tools for crypto, DeFi, NFT projects from listing, tracking, analytics, to audits, KYC, community management from our partners."
      />
      <Container className="py-10">
        <div className="mb-24">
          <div className="mb-24">
            <PaymentPlans paymentPlans={paymentPlans} />
          </div>
          <div className="mb-24">
            <Products />
          </div>
        </div>
      </Container>
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { products, paymentPlans } = await getProducts();

  const ip = getIpAddress(req);

  const usersWithTheSameIp = await prisma?.user.findMany({
    where: {
      ip,
    },
    select: {
      id: true,
    },
  });

  return {
    props: {
      products,
      paymentPlans,
      usersWithTheSameIp,
    },
  };
};

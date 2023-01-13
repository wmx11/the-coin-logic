import { Container, Text } from '@mantine/core';
import Meta from 'components/Meta';
import GradientTitle from 'components/Text/GradientTitle';
import { getProducts } from 'data/getters/product';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { PaymentPlan, Product } from 'types';
import { getIpAddress } from 'utils/utils';
import CampaignTrackerPricing from 'views/pricing/CampaignTrackerPricing';
import PaymentPlans from 'views/pricing/PaymentPlans';
import Products from 'views/pricing/Products';
import RegularPricing from 'views/pricing/RegularPricing';
import prisma from '../../data/prisma';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';

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
      <SmallBackgroundWrapper>
        <div className="text-center">
          <GradientTitle>Our Products and pricing</GradientTitle>
          <Text size="sm" color="dimmed">
            Explore our products and their pricing. Find the best suitable one for you. Have questions? Reach out to us!
          </Text>
        </div>
      </SmallBackgroundWrapper>
      <Container className="py-10">
        <div>
          <div className="mb-16">
            <div className="mb-16">
              <Products />
            </div>
            <div className="mb-8">
              <PaymentPlans paymentPlans={paymentPlans} />
            </div>
          </div>
          <div className="my-16">
            <GradientTitle order={3} align="center">
              Check our other products
            </GradientTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <RegularPricing products={products} />
            {/* <ProjectListingPricing products={products} /> */}
            <CampaignTrackerPricing products={products} usersWithTheSameIp={usersWithTheSameIp} />
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

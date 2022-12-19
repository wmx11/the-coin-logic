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

type Props = {
  products: Product[];
  paymentPlans: PaymentPlan[];
  usersWithTheSameIp: { id: string }[];
};

const index: FC<Props> = ({ products, paymentPlans, usersWithTheSameIp }) => {
  return (
    <>
      <Meta
        title="Cryptocurrency Project Listing, Marketing Tracking & More | Coin Logic"
        description="Get the tools you need for your cryptocurrency project. Track all marketing efforts, measure the success of your campaigns, and get an analytics report that's actionable and useful."
      />
      <Container className="py-10">
        <div className="mb-16">
          <GradientTitle>Our Products and Pricing</GradientTitle>
          <Text size="xs" color="dimmed">
            Explore our products and their pricing. Find the best suitable one for you. Have questions? Reach out to us!
          </Text>
        </div>
        <div>
          <div className="mb-16">
            <div className="mb-8">
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

import { Container, Text } from '@mantine/core';
import Meta from 'components/Meta';
import CampaignTrackerPricing from 'components/pages/pricing/CampaignTrackerPricing';
import ProjectListingPricing from 'components/pages/pricing/ProjectListingPricing';
import RegularPricing from 'components/pages/pricing/RegularPricing';
import GradientTitle from 'components/Text/GradientTitle';
import { getProducts } from 'data/getters/product';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { Product } from 'types';
import { getIpAddress } from 'utils/utils';
import prisma from '../../data/prisma';

type Props = {
  products: Product[];
  usersWithTheSameIp: { id: string }[];
};

const index: FC<Props> = ({ products, usersWithTheSameIp }) => {
  return (
    <>
      <Meta
        title="Cryptocurrency Project Listing, Marketing Tracking & More | Coin Logic"
        description="Get the tools you need for your cryptocurrency project. Track all marketing efforts, measure the success of your campaigns, and get an analytics report that's actionable and useful."
      />
      <Container className="py-10">
        <div className="mb-16">
          <GradientTitle align="center">Our Products and Pricing</GradientTitle>
          <Text align="center" size="sm" color="dimmed">
            Explore our products and their pricing. Find the best suitable one for you. Have questions? Reach out to us!
          </Text>
        </div>
        <div className="">
          <div className="grid md:grid-cols-2 gap-8">
            <RegularPricing products={products} />
            <ProjectListingPricing products={products} />
            <CampaignTrackerPricing products={products} usersWithTheSameIp={usersWithTheSameIp} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const products = await getProducts();

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
      usersWithTheSameIp,
    },
  };
};

import PricingCard from 'components/PricingCard';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/router';
import { FC } from 'react';
import routes from 'routes';
import useLoginFlowStore from 'store/useLoginFlowStore';
import { Product } from 'types';
import { products as productsSku } from 'types/Products';
import ProjectListing from 'public/images/project_listing_and_analytics.svg';

type ProjectListingPricingProps = {
  products: Product[];
};

const ProjectListingPricing: FC<ProjectListingPricingProps> = ({ products }) => {
  const { setLogin } = useLoginFlowStore((state) => state);
  const { user } = useUser();

  const router = useRouter();

  const product = products.find((item) => item.sku === productsSku.sku.projectListing);

  const handleClick = async () => {
    if (!user) {
      return setLogin(true);
    }

    router.push(routes.addProject);
  };

  if (!product) {
    return null;
  }

  const { label, priceLabel, description, offers } = product;

  return (
    <PricingCard
      image={ProjectListing}
      label={label as string}
      price={priceLabel as string}
      description={description as string}
      offers={offers as string}
      cta={'Add Project on TCL'}
      onClick={handleClick}
      styles={{
        cta: 'text-violet',
        label: 'text-white',
        offer: 'text-white',
        price: 'text-white',
        cardBody: 'bg-gradient-to-r from-violet to-grape',
        offerIcon: 'text-white',
        ctaVariant: 'white',
        description: 'text-white',
      }}
    />
  );
};

export default ProjectListingPricing;

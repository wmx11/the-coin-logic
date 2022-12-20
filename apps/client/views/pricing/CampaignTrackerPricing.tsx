import PricingCard from 'components/PricingCard';
import useCart from 'hooks/useCart';
import useUser from 'hooks/useUser';
import CampaignTracking from 'public/images/campaign_tracking.svg';
import { FC } from 'react';
import useLoginFlowStore from 'store/useLoginFlowStore';
import { Product } from 'types';
import { products as productsSku } from 'types/Products';

type CampaignTrackerPricingProps = {
  products: Product[];
  usersWithTheSameIp: { id: string }[];
};

const CampaignTrackerPricing: FC<CampaignTrackerPricingProps> = ({ products, usersWithTheSameIp }) => {
  const { setLogin } = useLoginFlowStore((state) => state);
  const { addItemAndGoToCart, isItemAdded } = useCart();
  const { user, subscription } = useUser();

  const {
    marketingCampaignTrackerFree,
    marketingCampaignTrackerUnlisted,
    marketingCampaignTrackerListed,
    marketingCampaignTracker,
  } = productsSku.sku;

  const product = products.find((item) => item.sku === marketingCampaignTracker);

  if (!product) {
    return null;
  }

  const { label, priceLabel, description, offers } = product;

  const getCampaignTrackerType = () => {
    if (!user) {
      return { type: '', cta: 'Get 7 day free trial!' };
    }

    if (usersWithTheSameIp.length < 2 && user?.ordersCount < 1 && (!user?.projectsCount || user?.projectsCount < 1)) {
      return { type: marketingCampaignTrackerFree, cta: 'Get 7 day free trial!' };
    }

    if (usersWithTheSameIp.length < 2 && user?.ordersCount < 1 && (!user?.projectsCount || user?.projectsCount > 0)) {
      return { type: marketingCampaignTrackerFree, cta: 'Get 7 day free trial!' };
    }

    if (user?.ordersCount > 0 && (!user?.projectsCount || user?.projectsCount < 1)) {
      return { type: marketingCampaignTrackerUnlisted, cta: 'Get License' };
    }

    return { type: marketingCampaignTrackerListed, cta: 'Get License' };
  };

  const handleClick = async () => {
    if (!user) {
      return setLogin(true);
    }

    if (subscription?.sku === getCampaignTrackerType().type || isItemAdded) {
      return;
    }

    await addItemAndGoToCart({ sku: getCampaignTrackerType().type });
  };

  return (
    <PricingCard
      image={CampaignTracking}
      label={label as string}
      price={priceLabel as string}
      description={description as string}
      offers={offers as string}
      disabled={isItemAdded}
      cta={
        subscription?.sku === getCampaignTrackerType().type
          ? 'You already have the license'
          : getCampaignTrackerType().cta
      }
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

export default CampaignTrackerPricing;

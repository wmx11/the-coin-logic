import { Text } from '@mantine/core';
import Paper from 'components/Paper';
import PaymentPlansSelect from 'components/PaymentPlans/PaymentPlansSelect';
import GradientText from 'components/Text/GradientText';
import { QUERY_PROJECT_ID } from 'constants/general';
import useCart from 'hooks/useCart';
import { FC } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import { PaymentPlan } from 'types';
import { products } from 'types/Products';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';

type ControlsProps = {
  data: ProjectWithMarketStatsAndChanges;
};

const Controls: FC<ControlsProps> = ({ data }) => {
  const { project } = data;
  const { addItemAndGoToCart, isItemAdded } = useCart();

  const handleChange = async (value: string) => {
    try {
      addItemAndGoToCart({
        sku: products.sku.projectListing,
        projectId: project.id,
        paymentPlanId: value,
        location: `${routes.cart}?${QUERY_PROJECT_ID}=${project.id}`,
      });
    } catch (error) {
      toast.error('There has been an issue with handling the payment.');
      console.log(error);
    }
  };

  return (
    <Paper className="flex items-center gap-2 justify-between">
      <div>
        <GradientText weight={700}>Your current plan: {project?.paymentPlan?.name || ''}</GradientText>
        <Text size="xs" color="dimmed">
          {project?.paymentPlan?.tooltip || ''}
        </Text>
      </div>
      <div>
        <PaymentPlansSelect
          currentPlan={project?.paymentPlan as PaymentPlan}
          label="Upgrade your plan"
          description="You can upgrade your payment plan anytime!"
          onChange={handleChange}
          disabled={isItemAdded}
        />
      </div>
    </Paper>
  );
};

export default Controls;

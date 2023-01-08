import { Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import PaymentPlansSelect from 'components/PaymentPlans/PaymentPlansSelect';
import GradientText from 'components/Text/GradientText';
import { QUERY_PROJECT, QUERY_PROJECT_ID } from 'constants/general';
import useCart from 'hooks/useCart';
import useUser from 'hooks/useUser';
import Link from 'next/link';
import { FC } from 'react';
import { toast } from 'react-toastify';
import routes from 'routes';
import { PaymentPlan } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { Icons } from 'utils/icons';
import { products } from 'utils/products';

type ControlsProps = {
  data: ProjectWithMarketStatsAndChanges;
};

const Controls: FC<ControlsProps> = ({ data }) => {
  const { project } = data;
  const { addItemAndGoToCart, isItemAdded } = useCart();
  const { isProjectEditor, user, isProjectOwner } = useUser();

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
        <div>
          <PaymentPlansSelect
            currentPlan={project?.paymentPlan as PaymentPlan}
            label="Upgrade your plan"
            description="You can upgrade your payment plan anytime!"
            onChange={handleChange}
            disabled={isItemAdded}
            size="xs"
          />
        </div>
      </div>
      <div className="flex gap-2 items-center flex-wrap">
        {project.displayBlogPosts && user && isProjectEditor(project.id) ? (
          <div className="mb-4">
            <Link href={`${routes.articleCreate}?${QUERY_PROJECT}=${project.slug}`} passHref>
              <GradientButton component="a" leftIcon={<Icons.Add />} size="xs">
                Create New Article
              </GradientButton>
            </Link>
          </div>
        ) : null}
        {user && (isProjectOwner(project.id) || isProjectEditor(project.id)) ? (
          <div className="mb-4">
            <Link href={`${routes.quizCreate}?${QUERY_PROJECT_ID}=${project?.id}`} passHref>
              <GradientButton component="a" leftIcon={<Icons.Add />} size="xs">
                Create New Quiz
              </GradientButton>
            </Link>
          </div>
        ) : null}
        {user && (isProjectOwner(project.id) || isProjectEditor(project.id)) ? (
          <div className="mb-4">
            <Link href={`${routes.transcriptionCreate}?${QUERY_PROJECT_ID}=${project?.id}`} passHref>
              <GradientButton component="a" leftIcon={<Icons.Add />} size="xs">
                Transcribe
              </GradientButton>
            </Link>
          </div>
        ) : null}
      </div>
    </Paper>
  );
};

export default Controls;

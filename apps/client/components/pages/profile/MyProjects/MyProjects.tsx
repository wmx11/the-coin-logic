import { Text } from '@mantine/core';
import { Column } from '@table-library/react-table-library/types/compact';
import GradientButton from 'components/Buttons/GradientButton';
import GoBack from 'components/GoBack';
import GrayBox from 'components/GrayBox';
import { ProjectTitle } from 'components/ProjectTitle';
import Table from 'components/Table';
import { responsiveStylesForLayoutWithSideMenu } from 'components/Table/mainTheme';
import GradientTitle from 'components/Text/GradientTitle';
import useCart from 'hooks/useCart';
import Link from 'next/link';
import { toast } from 'react-toastify';
import routes from 'routes';
import { Project } from 'types';
import { products } from 'types/Products';
import { formatDate } from 'utils/formatters';
import { Icons } from 'utils/icons';

type MyProjectsProps = {
  projects: Project[];
};

const MyProjects = ({ projects }: MyProjectsProps) => {
  if (!projects || !projects.length) {
    return (
      <div className="w-full">
        <GoBack />
        <div className="py-10">
          <GrayBox>
            <Text>You currently have no projects assigned to your account.</Text>
            <Link href={routes.addProject} passHref>
              <GradientButton component="a" color="violet" leftIcon={<Icons.Add />}>
                Add a project
              </GradientButton>
            </Link>
          </GrayBox>
        </div>
      </div>
    );
  }

  const { addItemAndGoToCart } = useCart();

  const handleClick = async (projectId: string) => {
    try {
      addItemAndGoToCart(products.sku.projectListing, `${routes.cart}?projectId=${projectId}`);
    } catch (error) {
      toast.error('There has been an issue with handling the payment.');
      console.error(error);
    }
  };

  const columns: Column[] = [
    {
      label: 'Project',
      pinLeft: true,
      renderCell: (project) => (
        <ProjectTitle
          size="sm"
          avatar={project?.logo?.url || ''}
          title={project.name as string}
          component="a"
          href={project.enabled ? `/project/${project.slug}` : ''}
          notifications={project.notifications}
        />
      ),
    },
    { label: 'Added', renderCell: (project) => formatDate(new Date(project.dateAdded)) },
    { label: 'Enabled', renderCell: (project) => project.enabled?.toString() },
    {
      label: 'Under Review',
      renderCell: ({ isPending, isAwaitingPayment, enabled }) => {
        if (isPending) {
          return 'Under Review';
        }

        if (isAwaitingPayment) {
          return 'Awaiting Payment';
        }

        if (enabled) {
          return 'Approved';
        }
      },
    },
    { label: 'Listed', renderCell: (project) => project.isListed?.toString() },
    { label: 'Track Holders', renderCell: (project) => project.trackHolders?.toString() },
    {
      label: 'Actions',
      renderCell: ({ isPending, isAwaitingPayment, enabled, id }) => {
        if (!isPending && !enabled && isAwaitingPayment) {
          return (
            <GradientButton size="sm" onClick={() => handleClick(id)}>
              Pay
            </GradientButton>
          );
        }

        return '-';
      },
    },
  ];

  return (
    <div>
      <div>
        <GoBack />
        <GradientTitle order={2} className="mt-4">
          You have {projects.length} listed {projects.length > 1 ? 'projects' : 'project'}
        </GradientTitle>
        <Text className="mb-4" size="sm" color="dimmed">
          If you have questions or some of the information about the projects is incorrect, please contact us via email
          or Discord.
        </Text>
      </div>
      <Table
        data={projects}
        columns={columns}
        customTheme={{
          Table: `--data-table-library_grid-template-columns: 140px repeat(6, 1fr);
          ${responsiveStylesForLayoutWithSideMenu}
          `,
        }}
      />
    </div>
  );
};

export default MyProjects;

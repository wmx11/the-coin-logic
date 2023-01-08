import { Text } from '@mantine/core';
import { Column } from '@table-library/react-table-library/types/compact';
import Table from 'components/Table';
import { responsiveStylesForLayoutWithSideMenu } from 'components/Table/mainTheme';
import GradientTitle from 'components/Text/GradientTitle';
import React, { FC } from 'react';
import routes from 'routes';
import { Provider } from 'types';
import { formatDate } from 'utils/formatters';

type PendingProvidersProps = {
  pendingProviders: Provider[];
};

const PendingProviders: FC<PendingProvidersProps> = ({ pendingProviders }) => {
  const columns: Column[] = [
    { label: 'Date Created', renderCell: (data) => formatDate(data?.dateAdded) },
    { label: 'Name', renderCell: (data) => data?.name },
    { label: 'Is Enabled', renderCell: (data) => data?.enabled?.toString() },
    {
      label: 'Profile',
      renderCell: (data) => (
        <a className="link" href={routes.nexusBySlug.replace('${slug}', data?.slug)} target="_blank">
          Go to profile
        </a>
      ),
    },
  ];
  return (
    <div>
      <GradientTitle order={2}>Pending Provider Profiles</GradientTitle>
      <Text size="sm" color="dimmed">
        These provider accounts are not enabled and are not listed on the NEXUS page. Please review them and enable them
        if they meet our standards.
      </Text>
      <Table
        data={pendingProviders || []}
        columns={columns}
        customTheme={{
          Table: `--data-table-library_grid-template-columns: repeat(4, 1fr);
    ${responsiveStylesForLayoutWithSideMenu}
    `,
        }}
      />
    </div>
  );
};

export default PendingProviders;

import { Space, Text } from '@mantine/core';
import { Column } from '@table-library/react-table-library/types/compact';
import GoBack from 'components/GoBack';
import PaymentStatus from 'components/PaymentStatus';
import Table from 'components/Table';
import { responsiveStylesForLayoutWithSideMenu } from 'components/Table/mainTheme';
import { Payment } from 'types';
import { formatDate } from 'utils/formatters';
import toCurrency from 'utils/toCurrency';

type PaymentsProps = {
  payments: Payment[];
};

const Payments = ({ payments }: PaymentsProps) => {
  if (!payments || !payments.length) {
    return (
      <div>
        <GoBack />
        <Text className="my-4">You have no payment history</Text>
      </div>
    );
  }

  const theme = {
    Table: `
    --data-table-library_grid-template-columns: 95px repeat(2, 1fr) 145px repeat(5, 1fr);
    ${responsiveStylesForLayoutWithSideMenu}`,
    BaseCell: `          
    &:nth-of-type(2) {
      left: 0;
    }`,
    Cell: `   
    &:nth-of-type(4) > div {
      white-space: unset;
      text-overflow: unset;
    }`,
  };

  const columns: Column[] = [
    { label: 'Issued', renderCell: ({ dateIssued }) => formatDate(new Date(dateIssued)) },
    {
      label: 'Name',
      pinLeft: true,
      renderCell: ({ invoiceUrl, name }) => (
        <a href={invoiceUrl as string} target="_blank" className="hover:underline">
          {name}
        </a>
      ),
    },
    {
      label: 'Status',
      renderCell: ({ status }) => <PaymentStatus status={status as string} />,
    },
    { label: 'Description', renderCell: ({ description }) => description },
    { label: 'Qnty', renderCell: ({ quantity }) => quantity },
    { label: 'Unit price', renderCell: ({ price }) => toCurrency(price as number) },
    { label: 'Discount', renderCell: ({ discount }) => (discount as number) || '-' },
    { label: 'Tax', renderCell: ({ tax }) => (tax as number) || '-' },
    { label: 'Total', renderCell: ({ amount }) => toCurrency(amount as number) },
  ];

  return (
    <div className="w-full">
      <GoBack />
      <Space h="md" />
      <Table data={payments} columns={columns} customTheme={theme} />
    </div>
  );
};

export default Payments;

import { Popover, Space, Text } from '@mantine/core';
import GoBack from 'components/GoBack';
import PaymentStatus from 'components/PaymentStatus';
import ResponsiveTable from 'components/ResponsiveTable';
import { useState } from 'react';
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

  const [state, setState] = useState(payments.map((x, index) => ({ row: index, isOpen: false })));

  const closeToggle = (index: number) =>
    setState((prevState) => {
      prevState[index].isOpen = false;
      return [...prevState];
    });

  const openToggle = (index: number) =>
    setState((prevState) => {
      if (state[index].row === index) {
        prevState[index].isOpen = !prevState[index].isOpen;
      }
      return [...prevState];
    });

  return (
    <div className="w-full">
      <GoBack />
      <Space h="md" />
      <ResponsiveTable
        data={{
          head: [
            { name: 'Issued', width: 75 },
            { name: 'Name', width: 80 },
            { name: 'Status', width: 70 },
            { name: 'Description', width: 190 },
            { name: 'Qnty', width: 50 },
            { name: 'Unit price', width: 80 },
            { name: 'Discount', width: 70 },
            { name: 'Tax', width: 50 },
            { name: 'Total', width: 80 },
            { name: '...', width: 20 },
          ],
          rows: payments.map(
            (
              {
                amount,
                dateIssued,
                datePaid,
                description,
                discount,
                invoiceUrl,
                name,
                paymentAddress,
                paymentMethod,
                price,
                quantity,
                status,
                tax,
              },
              index,
            ) => ({
              row: [
                { value: formatDate(new Date(dateIssued)) as string },
                {
                  value: (
                    <a href={invoiceUrl as string} target="_blank" className="hover:underline">
                      {name}
                    </a>
                  ),
                },
                { value: <PaymentStatus status={status as string} /> },
                { value: description as string },
                { value: quantity as number },
                { value: toCurrency(price as number) },
                { value: (discount as number) || '-' },
                { value: (tax as number) || '-' },
                { value: toCurrency(amount as number) },
                {
                  value: (
                    <Popover
                      opened={state[index]?.isOpen}
                      position="bottom"
                      spacing="xs"
                      target={
                        <div className="cursor-pointer" onClick={() => openToggle(index)}>
                          ...
                        </div>
                      }
                      onClose={() => closeToggle(index)}
                    >
                      <Text component="a" variant="link" href={invoiceUrl as string} target="_blank" size="xs">
                        View Invoice
                      </Text>
                    </Popover>
                  ),
                },
              ],
            }),
          ),
        }}
      />
    </div>
  );
};

export default Payments;

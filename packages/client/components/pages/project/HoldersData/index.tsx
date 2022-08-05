import React, { FC } from 'react';
import { FaWallet } from 'react-icons/fa';
import { formateDateWithHours } from '../../../../utils/formatters';
import { StatsTabGroup } from '../../../StatsTabGroup';

const HoldersData: FC = () => {
  const holdersData = [
    // {
    //   value: 79888,
    //   previousValue: {
    //     change: 100,
    //     percentage: 200
    //   },
    //   title: 'Holders',
    //   isCurrency: false,
    // },
    // {
    //   value: 107283,
    //   previousValue: 107283,
    //   title: 'Average Holdings',
    //   isCurrency: false,
    // },
    // {
    //   value: 278,
    //   previousValue: 278,
    //   title: 'Average Holdings (USD)',
    //   isCurrency: true,
    // },
    // {
    //   value: 50,
    //   previousValue: 40,
    //   title: 'New Holders Today',
    //   isCurrency: false,
    // },
    // {
    //   value: 5,
    //   previousValue: 4,
    //   title: 'Recurring Buyers',
    //   isCurrency: false,
    // },
    // {
    //   value: 2,
    //   previousValue: 1,
    //   title: 'Exiting Sellers',
    //   isCurrency: false,
    // },
  ];

  return (
    <StatsTabGroup
      title="Holders Data"
      untrackedMessage="Holders Data is untracked"
      Icon={FaWallet}
      subtitle={`Last updated ${formateDateWithHours('2022-06-20')}`}
      data={[]}
    />
  );
};

export default HoldersData;

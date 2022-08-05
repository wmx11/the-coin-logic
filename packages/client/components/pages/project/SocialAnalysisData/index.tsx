import React, { FC } from 'react';
import { FaDiscord, FaTwitter, FaWallet } from 'react-icons/fa';
import { StatsTabGroup } from '../../../StatsTabGroup';

const SocialAnalysisData: FC = () => {
  const socialAnalysisData = [
    {
      subGroup: {
        title: 'Discord',
        Icon: FaDiscord,
        data: [
          {
            value: 79888,
            previousValue: 79888,
            title: 'Holders',
            isCurrency: false,
          },
          {
            value: 107283,
            previousValue: 107283,
            title: 'Average Holdings',
            isCurrency: false,
          },
          {
            value: 278,
            previousValue: 278,
            title: 'Average Holdings (USD)',
            isCurrency: true,
          },
          {
            value: 50,
            previousValue: 40,
            title: 'New Holders Today',
            isCurrency: false,
          },
          {
            value: 5,
            previousValue: 4,
            title: 'Recurring Buyers',
            isCurrency: false,
          },
          {
            value: 2,
            previousValue: 1,
            title: 'Exiting Sellers',
            isCurrency: false,
          },
        ],
      },
    },
    {
      subGroup: {
        title: 'Twitter',
        Icon: FaTwitter,
        data: [
          {
            value: 79888,
            previousValue: 79888,
            title: 'Holders',
            isCurrency: false,
          },
          {
            value: 107283,
            previousValue: 107283,
            title: 'Average Holdings',
            isCurrency: false,
          },
          {
            value: 278,
            previousValue: 278,
            title: 'Average Holdings (USD)',
            isCurrency: true,
          },
          {
            value: 50,
            previousValue: 40,
            title: 'New Holders Today',
            isCurrency: false,
          },
          {
            value: 5,
            previousValue: 4,
            title: 'Recurring Buyers',
            isCurrency: false,
          },
          {
            value: 2,
            previousValue: 1,
            title: 'Exiting Sellers',
            isCurrency: false,
          },
        ],
      },
    },
  ];

  return <StatsTabGroup title="Social Analysis" data={socialAnalysisData} />;
};

export default SocialAnalysisData;

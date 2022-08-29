import { Divider, Text, Title } from '@mantine/core';
import { ClipboardButton } from 'components/ClipboardButton';
import React, { FC } from 'react';
import { FaShareSquare } from 'react-icons/fa';

type ReferralsProps = {
  referrals: {
    referralLink: string;
    referredUsers: number;
    onboardedProjects: number;
  };
};

const Referrals: FC<ReferralsProps> = ({ referrals }) => {
  const { referralLink, referredUsers, onboardedProjects } = referrals;
  
  return (
    <div className="mb-14">
      <Title order={3} className="flex gap-2 items-center mb-2 text-violet">
        <FaShareSquare size={15} />
        Referrals
      </Title>
      <Text>
        <strong>Your referral link: </strong>
        {referralLink} <ClipboardButton copy={referralLink} />
      </Text>
      <Text size="xs" color="dimmed" className="mb-2">
        Refer projects and earn rewards! For every successfully referred project you will receive a portion of the
        listing fee. Use the referral link above to invite new projects.
      </Text>
      <Text className="mb-2">
        <strong>Referred people:</strong> {referredUsers || 0}
      </Text>
      <Text className="mb-2">
        <strong>Successfully oboarded projects:</strong> {onboardedProjects || 0}
      </Text>
      <Divider size={1} />
    </div>
  );
};

export default Referrals;

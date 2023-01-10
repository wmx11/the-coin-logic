import { Divider, Text } from '@mantine/core';
import { ClipboardButton } from 'components/ClipboardButton';
import GradientTitle from 'components/Text/GradientTitle';
import { FC } from 'react';
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
    <div className="mb-10">
      <GradientTitle order={3} className="flex gap-2 items-center mb-2">
        <FaShareSquare size={15} className="text-violet" />
        Referrals
      </GradientTitle>

      <Divider size={1} className="my-2" />

      <Text className="mb-2">
        <strong>Your referral link: </strong>
        <div className="flex items-center">
          <Text className="break-all" size="sm" color="dimmed">
            {referralLink}
          </Text>
          <ClipboardButton copy={referralLink} />
        </div>
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
    </div>
  );
};

export default Referrals;

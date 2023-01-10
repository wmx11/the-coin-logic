import { Button, Text } from '@mantine/core';
import GradientTitle from 'components/Text/GradientTitle';
import UserAvatar from 'components/UserAvatar';
import Link from 'next/link';
import { FC } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import routes from 'routes';
import useUserStore, { UserWithOrdersCount } from 'store/useUserStore';
import { formatDate } from 'utils/formatters';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import PersonalInformation from './PersonalInformation';
import Referrals from './Referrals';
import SubscriptionInformation from './SubscriptionInformation';
import toLocaleString from 'utils/toLocaleString';

type ProfileDataType = {
  className?: string;
};

const ProfileData: FC<ProfileDataType> = ({ className }) => {
  const user = useUserStore((state) => state.user) as UserWithOrdersCount & {
    onboardedProjects: number;
    referredUsers: number;
  };

  if (!user) {
    return null;
  }

  const { name, referralCode, dateCreated, onboardedProjects, referredUsers, serviceTokens } = user;

  const referralLink = `${routes.referral}${referralCode}`;

  return (
    <div className={className}>
      <div className="mb-8">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <UserAvatar name={name as string} />
              <GradientTitle order={2}>{name}</GradientTitle>
            </div>
            <Text size="xs" color="dimmed">
              Account Balance: {toLocaleString(serviceTokens?.amount || 0) || 0} tokens (credits)
            </Text>
            <Text className="mb-2" size="xs" color="dimmed">
              Joined {formatDate(new Date(dateCreated))}
            </Text>
          </div>
          <div>
            <Link href="/profile/edit" passHref>
              <Button component="a" color="violet" variant="outline" rightIcon={<FaRegEdit />}>
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <PersonalInformation user={user} />
      <SubscriptionInformation user={user} />
      <Referrals referrals={{ referralLink, referredUsers, onboardedProjects }} />
      <ChangePassword />
      <DeleteAccount />
    </div>
  );
};

export default ProfileData;

import { Button, Text } from '@mantine/core';
import GradientTitle from 'components/Text/GradientTitle';
import UserAvatar from 'components/UserAvatar';
import Link from 'next/link';
import { FC } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import routes from 'routes';
import useUserStore from 'store/useUserStore';
import { User } from 'types';
import { formatDate } from 'utils/formatters';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import PersonalInformation from './PersonalInformation';
import Referrals from './Referrals';
import SubscriptionInformation from './SubscriptionInformation';

type ProfileDataType = {
  className?: string;
};

const ProfileData: FC<ProfileDataType> = ({ className }) => {
  const user = useUserStore((state) => state.user) as User & { onboardedProjects: number; referredUsers: number };

  if (!user) {
    return null;
  }

  const { name, referralCode, dateCreated, onboardedProjects, referredUsers } = user;

  const referralLink = `${routes.referral}${referralCode}`;

  return (
    <div className={className}>
      <div className="mb-8">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2 items-center">
              <UserAvatar name={name as string} />
              <GradientTitle order={2}>{name}</GradientTitle>
            </div>
            <Text className="mb-2" color="dimmed">
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

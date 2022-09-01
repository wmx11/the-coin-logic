import { Button, Divider, Text, Title } from '@mantine/core';
import UserAvatar from 'components/UserAvatar';
import Link from 'next/link';
import { FC } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import useUserStore from 'store/useUserStore';
import { User } from 'types';
import { formatDate } from 'utils/formatters';
import routes from 'routes';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import PersonalInformation from './PersonalInformation';
import Referrals from './Referrals';

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
      <div className="mb-14">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2 items-center">
              <UserAvatar name={name as string} />
              <Title order={2}>{name}</Title>
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
        <Divider size={1} />
      </div>

      <PersonalInformation user={user} />
      <Referrals referrals={{ referralLink, referredUsers, onboardedProjects }} />
      <ChangePassword />
      <DeleteAccount />
    </div>
  );
};

export default ProfileData;

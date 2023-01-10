import { Divider, Text } from '@mantine/core';
import GradientTitle from 'components/Text/GradientTitle';
import { FC } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { User } from 'types';

type PersonalInformationProps = {
  user: User;
};

const PersonalInformation: FC<PersonalInformationProps> = ({ user }) => {
  const { firstName, lastName, email, projectsCount, walletAddress, isSubscribedToEmail } = user;
  return (
    <div className="mb-10">
      <GradientTitle order={3} className="flex gap-2 items-center mb-2">
        <FaUserAlt size={15} className="text-violet" />
        Personal Information
      </GradientTitle>

      <Divider size={1} className="my-2" />

      <Text className="mb-2">
        <strong>First Name:</strong> {firstName || '...'}
      </Text>
      <Text className="mb-2">
        <strong>Last Name:</strong> {lastName || '...'}
      </Text>
      <Text className="mb-2">
        <strong>Email:</strong> {email || '...'}
      </Text>
      <Text className="mb-2 break-all">
        <strong>Wallet Address:</strong> {walletAddress || '...'}
      </Text>
      <Text className="mb-2">
        <strong>Listed Projects:</strong> {projectsCount}
      </Text>
      <Text className="mb-2">
        <strong>Subscribed to TCL newsletter:</strong> {isSubscribedToEmail ? 'Yes' : 'No'}
      </Text>
    </div>
  );
};

export default PersonalInformation;

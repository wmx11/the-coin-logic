import { Checkbox, Divider, Text, Title } from '@mantine/core';
import React, { FC } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { User } from 'types';

type PersonalInformationProps = {
  user: User;
};

const PersonalInformation: FC<PersonalInformationProps> = ({ user }) => {
  const { firstName, lastName, email, projectsCount, isSubscribedToEmail, isVerified } = user;
  return (
    <div className="mb-14">
      <Title order={3} className="flex gap-2 items-center mb-2 text-violet">
        <FaUserAlt size={15} />
        Personal Information
      </Title>
      <Text className="mb-2">
        <strong>First Name:</strong> {firstName || '...'}
      </Text>
      <Text className="mb-2">
        <strong>Last Name:</strong> {lastName || '...'}
      </Text>
      <Text className="mb-2">
        <strong>Email:</strong> {email || '...'}
      </Text>
      <Text className="mb-2">
        <strong>Projects:</strong> {projectsCount}
      </Text>
      <Checkbox
        checked={isSubscribedToEmail as boolean}
        disabled
        label="Subscribed to email notifications and newsletters"
        color="violet"
        className="mb-2"
      />
      <Checkbox checked={isVerified as boolean} disabled label="Account is active" color="violet" className="mb-2" />
      <Divider size={1} />
    </div>
  );
};

export default PersonalInformation;

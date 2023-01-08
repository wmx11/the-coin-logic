import { Text } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';

type GoBackProps = {
  showLabel?: boolean;
  label?: string;
};

const GoBack: FC<GoBackProps> = ({ showLabel = true, label }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.back()}>
      <IoArrowBackOutline size={18} />
      {showLabel ? <Text>{label ? label : 'Go Back'}</Text> : null}
    </div>
  );
};

export default GoBack;

import { Divider, Text, Title } from '@mantine/core';
import React, { FC } from 'react';
import { IconType } from 'react-icons';

type TitleWithIconProps = {
  title?: string;
  Icon?: IconType;
  subtitle?: string;
};

const TitleWithIcon: FC<TitleWithIconProps> = ({ title, subtitle, Icon }) => {
  return (
    <>
      {title && (
        <div className={`flex gap-2 items-center ${!subtitle && 'mb-4'}`}>
          {Icon && <Icon className="text-md" />}
          <Title order={2}>{title}</Title>
        </div>
      )}

      {subtitle && (
        <Text className="text-slate-500 mb-4 font-semibold" size="xs">
          {subtitle}
        </Text>
      )}

      <Divider my="sm" />
    </>
  );
};

export default TitleWithIcon;

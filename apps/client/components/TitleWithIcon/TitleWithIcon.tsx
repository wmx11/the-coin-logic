import { Text } from '@mantine/core';
import GradientTitle from 'components/Text/GradientTitle';
import { FC } from 'react';
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
          {Icon && <Icon className="text-md text-violet" />}
          <GradientTitle order={2}>{title}</GradientTitle>
        </div>
      )}

      {subtitle && (
        <Text className="text-slate-500 mb-4 font-semibold" size="xs">
          {subtitle}
        </Text>
      )}

      <div className="mb-6"></div>
    </>
  );
};

export default TitleWithIcon;

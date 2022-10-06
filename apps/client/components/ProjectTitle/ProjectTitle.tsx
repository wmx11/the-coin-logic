import { Avatar, Indicator, Title, TitleOrder } from '@mantine/core';
import React, { FC, HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import { Notification } from 'types';
import Image from 'next/image';

type ProjectTitleProps = {
  size: string;
  avatar: string;
  title: string;
  component?: string;
  href?: string;
  notifications?: Notification[];
};

const ProjectTitle: FC<ProjectTitleProps> = ({ size, avatar, title, component, href, notifications }) => {
  const TitleComponent = () => {
    if (component === 'a') {
      return (
        <Link href={href as HTMLAttributeAnchorTarget}>
          <a className="hover:text-violet transition-colors font-semibold">{title}</a>
        </Link>
      );
    }

    const sizes = {
      xs: 8,
      sm: 6,
      md: 2,
      lg: 1,
    };

    return <Title order={sizes[size as keyof typeof sizes] as TitleOrder}>{title}</Title>;
  };

  const TitleWithLogoComponent = () => {
    if (size === 'md') {
      return (
        <div className="flex gap-4 items-center mb-2">
          <Image src={avatar} alt="project logo" height={38} width={38} style={{ verticalAlign: 'middle' }} />
          <TitleComponent />
        </div>
      );
    }
    if (size === 'sm') {
      return (
        <div className="flex gap-x-2 items-center">
          <Indicator
            color="violet"
            disabled={(notifications && notifications?.length < 1) || !notifications ? true : false}
            position="middle-end"
            label={notifications?.length}
            inline
            size={15}
            className="items-center flex"
          >
            <Image src={avatar} alt="project logo" height={26} width={26} style={{ verticalAlign: 'middle' }} />
          </Indicator>
          <TitleComponent />
        </div>
      );
    }
    return <TitleComponent />;
  };

  return <TitleWithLogoComponent />;
};

export default ProjectTitle;

import { Avatar, Title } from '@mantine/core';
import React, { FC, HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';

type ProjectTitleProps = {
  size: string;
  avatar: string;
  title: string;
  component?: string;
  href?: string;
};

const ProjectTitle: FC<ProjectTitleProps> = ({ size, avatar, title, component, href }) => {
  const TitleComponent = () => {
    if (component === 'a') {
      return (
        <Link href={href as HTMLAttributeAnchorTarget}>
          <a className="hover:text-violet transition-colors">{title}</a>
        </Link>
      );
    }

    return (
      <Title order={size === 'md' ? 1 : 5}>
        {title}
      </Title>
    );
  };

  const TitleWithLogoComponent = () => {
    if (size === 'md') {
      return (
        <div className="flex gap-4 items-center mb-2">
          <Avatar src={avatar} alt="Project logo" size="md" />
          <TitleComponent />
        </div>
      );
    }
    if (size === 'sm') {
      return (
        <div className="flex gap-x-2 items-center">
          <Avatar src={avatar} alt="Project logo" size="sm" />
          <TitleComponent />
        </div>
      );
    }
    return <TitleComponent />;
  };

  return <TitleWithLogoComponent />;
};

export default ProjectTitle;

import { Indicator, TitleOrder } from '@mantine/core';
import GradientTitle from 'components/Text/GradientTitle';
import Image from 'next/image';
import Link from 'next/link';
import { FC, HTMLAttributeAnchorTarget, useState } from 'react';
import { Notification } from 'types';

type ProjectTitleProps = {
  size: string;
  avatar: string;
  title?: string;
  component?: string;
  href?: string;
  target?: string;
  notifications?: Notification[];
};

const ProjectTitle: FC<ProjectTitleProps> = ({ size, avatar, title, component, href, notifications, target }) => {
  const [src, setSrc] = useState<string | undefined>(avatar);

  const TitleComponent = () => {
    const sizes = {
      xs: 8,
      sm: 6,
      md: 2,
      lg: 1,
    };

    if (component === 'a') {
      return (
        <Link href={href as HTMLAttributeAnchorTarget}>
          <a className="hover:underline underline-offset-1 text-violet" target={target}>
            <GradientTitle order={sizes[size as keyof typeof sizes] as TitleOrder}>{title}</GradientTitle>
          </a>
        </Link>
      );
    }

    return <GradientTitle order={sizes[size as keyof typeof sizes] as TitleOrder}>{title}</GradientTitle>;
  };

  const TitleWithLogoComponent = () => {
    if (size === 'md') {
      return (
        <div className="flex gap-4 items-center mb-2">
          {src ? (
            <Image
              src={src}
              alt="project logo"
              height={38}
              width={38}
              style={{ verticalAlign: 'middle' }}
              onError={() => {
                setSrc(undefined);
              }}
            />
          ) : (
            <div className="h-[38px] w-[38px] bg-slate-200"></div>
          )}
          <TitleComponent />
        </div>
      );
    }

    if (size === 'sm') {
      return (
        <div className="flex gap-x-2 items-center relative">
          <Indicator
            processing
            offset={2}
            color="violet"
            disabled={(notifications && notifications?.length < 1) || !notifications ? true : false}
            position="top-end"
            size={10}
            className="items-center flex mt-[2px]"
          >
            {src ? (
              <Image
                src={src}
                alt="project logo"
                height={26}
                width={26}
                style={{ verticalAlign: 'middle' }}
                onError={() => {
                  setSrc(undefined);
                }}
              />
            ) : (
              <div className="h-[26px] w-[26px] bg-slate-200"></div>
            )}
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

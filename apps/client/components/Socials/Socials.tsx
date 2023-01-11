import { Badge, Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Link from 'next/link';
import { FC } from 'react';
import { FaDiscord, FaGithub, FaReddit, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';

type SocialsProps = {
  size?: number;
  type?: 'link' | 'button';
  label?: string;
};

export const Discord: FC<SocialsProps> = ({ size, type, label }) => {
  return (
    <Link href="https://discord.gg/mBHYuJKfEX" passHref>
      {type === 'button' ? (
        <GradientButton component="a" target="_blank" leftIcon={<FaDiscord size={size || 30} />}>
          {label || 'Join us on Discord'}
        </GradientButton>
      ) : (
        <a target="_blank">
          <FaDiscord size={size || 30} />
        </a>
      )}
    </Link>
  );
};

export const Twitter: FC<SocialsProps> = ({ size }) => {
  return (
    <Link href="https://twitter.com/TheCoinLogic">
      <a target="_blank">
        <FaTwitter size={size || 28} />
      </a>
    </Link>
  );
};

export type SocialBadgesProps = {
  data: {
    name?: string;
    discord?: string;
    twitter?: string;
    telegram?: string;
    reddit?: string;
    github?: string;
    youtube?: string;
  };
};

export const SocialBadges: FC<SocialBadgesProps> = ({ data }) => {
  const socials = [
    { title: 'Discord', href: data?.discord, Icon: FaDiscord },
    { title: 'Twitter', href: data?.twitter, Icon: FaTwitter },
    { title: 'Telegram', href: data?.telegram, Icon: FaTelegram },
    { title: 'Reddit', href: data?.reddit, Icon: FaReddit },
    { title: 'GitHub', href: data?.github, Icon: FaGithub },
    { title: 'YouTube', href: data?.youtube, Icon: FaYoutube },
  ];

  return socials.length ? (
    <div className="mb-4">
      <Text size="sm" weight={700} className="mb-2">
        {data?.name || ''} Social Media
      </Text>
      <div className="flex items-center gap-2">
        {socials.map(({ title, href, Icon }, index) => {
          return (
            href && (
              <Badge
                color="violet"
                variant="outline"
                size="md"
                key={`${title}_${index}`}
                component="a"
                href={`${href}`}
                target="_blank"
                className="cursor-pointer"
                leftSection={<Icon />}
              >
                {title}
              </Badge>
            )
          );
        })}
      </div>
    </div>
  ) : null;
};

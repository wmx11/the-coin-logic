import { Project, Network } from 'types';
import { Badge, Paper, Space, Spoiler, Text } from '@mantine/core';
import React, { FC } from 'react';
import { FaDiscord, FaGithub, FaReddit, FaTelegram, FaTwitter } from 'react-icons/fa';
import { FiLink, FiExternalLink } from 'react-icons/fi';
import { IoDocumentText } from 'react-icons/io5';
import { BiUserCheck } from 'react-icons/bi';

import { formatDate } from '../../../../utils/formatters';
import { ClipboardButton } from '../../../ClipboardButton';
import { NetworkBadge } from '../../../NetworkBadge';

type AboutProjectProps = {
  data: Project;
};

const AboutProject: FC<AboutProjectProps> = ({ data }) => {
  const {
    website,
    name,
    whitepaper,
    pairAddress,
    contractAddress,
    network,
    dateAdded,
    description,
    twitter,
    telegram,
    discord,
    reddit,
    github,
  } = data;

  const socials = [
    { title: 'Discord', href: discord, Icon: FaDiscord },
    { title: 'Twitter', href: twitter, Icon: FaTwitter },
    { title: 'Telegram', href: telegram, Icon: FaTelegram },
    { title: 'Reddit', href: reddit, Icon: FaReddit },
    { title: 'GitHub', href: github, Icon: FaGithub },
  ];

  return (
    <Paper p="md" shadow="sm" withBorder>
      <div className="mb-4">
        <div className="flex gap-2 flex-wrap mb-4">
          <Badge
            className="cursor-pointer"
            variant="outline"
            color="violet"
            component="a"
            href={website as string}
            target="_blank"
            leftSection={<FiLink />}
            rightSection={<FiExternalLink />}
          >
            Website
          </Badge>
          <Badge
            className="cursor-pointer"
            variant="outline"
            color="violet"
            component="a"
            href={whitepaper as string}
            target="_blank"
            leftSection={<IoDocumentText />}
            rightSection={<FiExternalLink />}
          >
            Whitepaper
          </Badge>
        </div>
        <Text size="sm" className="mb-2">
          <strong>Contract Address:</strong>
          <Space />
          <div className="flex items-center gap-1 break-all">
            {contractAddress}
            <ClipboardButton copy={contractAddress as string} />
          </div>
        </Text>
        <Text size="sm">
          <strong>Pair Address:</strong>
          <Space />
          <div className="flex items-center gap-1 break-all">
            {pairAddress}
            <ClipboardButton copy={pairAddress as string} />
          </div>
        </Text>
        <Text size="sm">
          <strong>Network:</strong>
          <div className="my-2">
            <NetworkBadge network={network as Network} showName />
          </div>
        </Text>
      </div>

      <div className="mb-4">
        <Text size="sm" weight={700}>
          About {name}
        </Text>
        <Spoiler maxHeight={120} showLabel="Show More" hideLabel="Hide" className="text-sm">
          {description}
        </Spoiler>
      </div>

      <div className="mb-4">
        <Text size="sm" weight={700} className="mb-2">
          {name} Social Media
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
      <div className="flex justify-end my-2">
        <Badge color="violet" leftSection={<BiUserCheck />}>
          Onboarded {formatDate(dateAdded as string)}
        </Badge>
      </div>
    </Paper>
  );
};

export default AboutProject;

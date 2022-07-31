import { Avatar, Badge, Paper, Space, Spoiler, Text } from '@mantine/core';
import React from 'react';
import { FaDiscord, FaReddit, FaTelegram, FaTwitter } from 'react-icons/fa';
import { FiLink, FiExternalLink } from 'react-icons/fi';
import { IoDocumentText } from 'react-icons/io5';
import { BiUserCheck } from 'react-icons/bi';
import { formatDate } from '../../../../utils/formatters';
import ClipboardButton from '../../../ClipboardButton';

const AboutProject = ({ data }) => {
  const {
    website,
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
  } = data;

  const socials = [
    { title: 'Discord', href: discord, Icon: FaDiscord },
    { title: 'Twitter', href: twitter, Icon: FaTwitter },
    { title: 'Telegram', href: telegram, Icon: FaTelegram },
    { title: 'Reddit', href: reddit, Icon: FaReddit },
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
            href={website}
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
            href={whitepaper}
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
          <div className="flex items-center gap-1">
            {contractAddress}
            <ClipboardButton copy={contractAddress} />
          </div>
        </Text>
        <Text size="sm">
          <strong>Pair Address:</strong>
          <Space />
          <div className="flex items-center gap-1">
            {pairAddress}
            <ClipboardButton copy={pairAddress} />
          </div>
        </Text>
        <Text size="sm">
          <strong>Network:</strong>
          <div className="my-2">
            <Badge
              color="violet"
              variant="outline"
              size="md"
              leftSection={<Avatar alt="Avatar for badge" size={15} src={network.logo.url} />}
            >
              {network.name}
            </Badge>
          </div>
        </Text>
      </div>

      <div className="mb-4">
        <Text size="sm" weight={700}>
          Description
        </Text>
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" className="text-sm">
          {description}
        </Spoiler>
      </div>

      <div className="mb-4">
        <Text size="sm" weight={700} className="mb-2">
          Community
        </Text>
        <div className="flex items-center gap-4">
          {socials.map(({ title, href, Icon }, index) => {
            return (
              href && (
                <Avatar
                  key={`${title}_${index}`}
                  component="a"
                  radius="xl"
                  size="md"
                  color="violet"
                  href={`${href}`}
                  target="_blank"
                  src={null}
                  alt={`${title}`}
                >
                  <Icon />
                </Avatar>
              )
            );
          })}
        </div>
      </div>
      <div className="flex justify-end my-2">
        <Badge color="violet" leftSection={<BiUserCheck />}>
          Onboarded {formatDate(dateAdded)}
        </Badge>
      </div>
    </Paper>
  );
};

export default AboutProject;

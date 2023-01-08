import { Anchor, Badge, Space, Spoiler, Text, Tooltip } from '@mantine/core';
import Paper from 'components/Paper';
import { FC } from 'react';
import { BiUserCheck } from 'react-icons/bi';
import { FaDiscord, FaGithub, FaReddit, FaTelegram, FaTwitter } from 'react-icons/fa';
import { Network, Project } from 'types';
import toLocaleString from 'utils/toLocaleString';
import { ClipboardButton } from '../../../components/ClipboardButton';
import { NetworkBadge } from '../../../components/NetworkBadge';
import { formatDate } from '../../../utils/formatters';
import CommunityComments from '../CommunityComments';
import CommunityVotes from '../CommunityVotes';
import { SocialBadges } from 'components/Socials/Socials';

type AboutProjectProps = {
  data: Project;
};

const AboutProject: FC<AboutProjectProps> = ({ data }) => {
  const {
    name,
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
    sellTax,
    buyTax,
    apy,
    isNft,
    displayCommunityVotes,
    displayCommunityComments,
    youtube,
  } = data;

  const socials = [
    { title: 'Discord', href: discord, Icon: FaDiscord },
    { title: 'Twitter', href: twitter, Icon: FaTwitter },
    { title: 'Telegram', href: telegram, Icon: FaTelegram },
    { title: 'Reddit', href: reddit, Icon: FaReddit },
    { title: 'GitHub', href: github, Icon: FaGithub },
  ];

  return (
    <>
      <Paper className="mb-4">
        <div className="mb-4 flex flex-col md:flex-row md:gap-8">
          <div>
            <Text size="sm" className="mb-2">
              <strong>Contract Address:</strong>
              <Space />
              <div className="flex items-center gap-1 break-all">
                <Anchor href={`${network?.tokenScanner}/${contractAddress}`} target="_blank" size="sm" color="violet">
                  {contractAddress}
                </Anchor>
                <ClipboardButton copy={contractAddress as string} />
              </div>
            </Text>

            {!isNft ? (
              <Text size="sm">
                <strong>Pair Address:</strong>
                <Space />
                <div className="flex items-center gap-1 break-all">
                  <Tooltip label={pairAddress} withArrow multiline styles={{ tooltip: { maxWidth: '400px' } }}>
                    <div className="truncate max-w-[200px] md:max-w-[350px]">{pairAddress}</div>
                  </Tooltip>
                  <ClipboardButton copy={pairAddress as string} />
                </div>
              </Text>
            ) : null}

            <Text size="sm">
              <strong>Network:</strong>
              <div className="my-2">
                <NetworkBadge network={network as Network} showName />
              </div>
            </Text>
          </div>

          <div>
            {buyTax && (
              <Text size="sm" className="mb-2">
                <strong>Buy Tax:</strong>
                <Space />
                <div className="flex items-center gap-1 break-all">{toLocaleString(buyTax)}%</div>
              </Text>
            )}

            {sellTax && (
              <Text size="sm" className="mb-2">
                <strong>Sell Tax:</strong>
                <Space />
                <div className="flex items-center gap-1 break-all">{toLocaleString(sellTax)}%</div>
              </Text>
            )}

            {apy && (
              <Text size="sm" className="mb-2">
                <strong>APY:</strong>
                <Space />
                <div className="flex items-center gap-1 break-all">{toLocaleString(apy)}%</div>
              </Text>
            )}
          </div>
        </div>

        {description && (
          <div className="mb-4">
            <Text size="sm" weight={700}>
              About {name}
            </Text>
            <Spoiler maxHeight={120} showLabel="Show More" hideLabel="Hide" className="text-sm">
              {description}
            </Spoiler>
          </div>
        )}

        <SocialBadges
          data={{
            name: name as string,
            discord: discord as string,
            github: github as string,
            reddit: reddit as string,
            telegram: telegram as string,
            twitter: twitter as string,
            youtube: youtube as string,
          }}
        />

        <div className="flex justify-end my-2">
          <Badge color="violet" leftSection={<BiUserCheck />}>
            Onboarded {formatDate(dateAdded as string)}
          </Badge>
        </div>
      </Paper>

      {displayCommunityVotes ? (
        <div className="mb-4">
          <CommunityVotes project={data} />
        </div>
      ) : null}

      {displayCommunityComments ? (
        <div className="mb-4">
          <CommunityComments project={data} />
        </div>
      ) : null}

      <div className="mt-4">
        <Text size="xs" color="dimmed">
          You can open the scanner page by clicking on the contract address.
        </Text>
        <Text size="xs" color="dimmed">
          You can view the charts by clicking the chart icon in the lower right corner.
        </Text>
        <Text size="xs" color="dimmed">
          You can read an explanation about a particular data piece by clicking on the icon in the lower left corner.
        </Text>
      </div>
    </>
  );
};

export default AboutProject;

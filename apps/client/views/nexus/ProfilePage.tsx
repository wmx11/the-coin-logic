import { Badge, Container, Spoiler, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import GradientButton from 'components/Buttons/GradientButton';
import GoBack from 'components/GoBack';
import { ImageWithPlaceholder } from 'components/Images/Images';
import Meta from 'components/Meta';
import Paper from 'components/Paper';
import SocialShare from 'components/SocialShare';
import { SocialBadges } from 'components/Socials/Socials';
import StarRating from 'components/StarRating';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import useControls from 'hooks/useControls';
import useUser from 'hooks/useUser';
import { FC, useEffect } from 'react';
import routes from 'routes';
import { Provider } from 'types';
import { formatDate } from 'utils/formatters';
import { Icons } from 'utils/icons';
import toCurrency from 'utils/toCurrency';
import CommunityComments from 'views/project/CommunityComments';
import CommunityVotes from 'views/project/CommunityVotes';
import ProfileControls from './ProfileControls';
import toLocaleString from 'utils/toLocaleString';
import SubscribeToEmail from 'components/SubscribeToEmail';

type ProfilePageProps = {
  data: Provider;
};

const ProfilePage: FC<ProfilePageProps> = ({ data }) => {
  const {
    id,
    name,
    slug,
    nickname,
    backgroundImage,
    image,
    about,
    enabled,
    contactEmail,
    displayEmail,
    tags,
    openForWork,
    displayPrices,
    priceFrom,
    priceTo,
    offers,
    followersCount,
    followers: follower,
    votesCount,
    website,
    dateAdded,
  } = data;

  const { user, isFollower, isProvider } = useUser();
  const { followers, handleFollow, handleView } = useControls({ initialFollowers: followersCount as number });
  const { hovered, ref } = useHover();

  useEffect(() => {
    handleView({ providerId: id });
  }, []);

  const getFollowText = () => {
    if (followers.type === 'disconnect') {
      return 'Follow';
    }

    if (followers.type === 'connect') {
      return hovered ? 'Unfollow' : 'Following';
    }

    if (user && follower && isFollower(follower)) {
      return hovered ? 'Unfollow' : 'Following';
    }

    return 'Follow';
  };

  return (
    <>
      <Meta
        title={`${name} - NEXUS Profile | Coin Logic`}
        description={`Get the latest insights and updates from ${name}! Follow ${name} for content, and valuable insights on all things crypto.`}
        image={image?.url as string}
      />
      <Container size="md" className="pb-10">
        <div className="bg-white/30 top-0 w-full p-2">
          <div>
            <GoBack showLabel={false} />
          </div>
        </div>
        <div
          className={`bg-violet h-[250px] bg-no-repeat bg-bottom bg-cover`}
          style={{ backgroundImage: `url(${backgroundImage?.url as string})` }}
        ></div>

        <div className="p-4 border rounded-md mb-4">
          <div className="rounded-full shadow-md w-[140px] h-[140px] mt-[-95px] mb-2 overflow-hidden z-10 border-4 border-white bg-white relative">
            <ImageWithPlaceholder image={image?.url as string} width={140} height={140} alt={name as string} />
          </div>

          <div className="flex justify-between flex-col md:flex-row mb-8">
            <div>
              {enabled ? null : (
                <GradientText weight={600} className="mb-2">
                  Your NEXUS account is currently visible only to you. Please wait while we review your account. Once
                  enabled, you will be able to share your profile.
                </GradientText>
              )}
              <GradientTitle>{name}</GradientTitle>
              {nickname ? (
                <Text size="xs" color="dimmed">
                  @{nickname}
                </Text>
              ) : null}

              {displayEmail ? (
                <Text size="xs" color="dimmed">
                  Contact me at: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </Text>
              ) : null}
              <Text size="xs" color="dimmed" className="mb-4">
                {tags && tags.length ? tags.map((tag) => tag?.name).join(', ') : null}
              </Text>
              <div className="flex items-center gap-4 mb-4">
                {website ? (
                  <Text size="sm" className="flex items-center gap-2">
                    <Icons.Link />
                    <a href={website as string} target="__blank" className="link">
                      {website}
                    </a>
                  </Text>
                ) : null}

                <Text size="sm" className="flex items-center gap-2">
                  <Icons.Calendar />
                  Joined {formatDate(dateAdded)}
                </Text>
              </div>
              <Text weight={600} size="sm" className="mb-4">
                {toLocaleString(followers.count as number)} Followers
              </Text>
              {enabled ? (
                <div className="mt-4">
                  <SocialShare
                    hashtag={slug as string}
                    title={`Discover and network with ${name} on TCL Nexus! Find out more at `}
                    url={`${routes.base}${routes.nexusBySlug.replace('${slug}', slug as string)}`}
                  />
                </div>
              ) : null}
            </div>

            <div>
              <div className="flex justify-end mb-6">
                {(user && isProvider(id)) || user?.isAdmin ? (
                  <ProfileControls provider={data} />
                ) : (
                  <div ref={ref}>
                    <GradientButton onClick={() => handleFollow({ providerId: id })} size="sm">
                      {getFollowText()}
                    </GradientButton>
                  </div>
                )}
              </div>

              <div className="flex justify-end mb-6">
                <StarRating
                  providerId={id}
                  rating={votesCount as number}
                  readOnly={(user && (isProvider(id) as boolean)) || false}
                />
              </div>

              <div className="text-right mb-4">
                {openForWork ? (
                  <Badge color="violet" className="mb-2">
                    Open for offers
                  </Badge>
                ) : null}
                {displayPrices ? (
                  <Text size="sm" color="dimmed">
                    Rates from {toCurrency(priceFrom as number)} - {toCurrency(priceTo as number)}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-1 ${offers ? 'md:grid-cols-2' : ''}  gap-4 mb-4`}>
            <div >
              <Spoiler maxHeight={90} showLabel="Show more" hideLabel="Hide" className="mb-4" >
                <Text size="sm" >{about}</Text>
              </Spoiler>
            </div>
            {offers ? (
              <div>
                <Paper withBorder>
                  <GradientText weight={600} size="lg">
                    Offers
                  </GradientText>
                  <div className="whitespace-pre text-left">
                    <Text size="sm">{offers}</Text>
                  </div>
                </Paper>
              </div>
            ) : null}
          </div>

          <div>
            <SocialBadges
              data={{
                name: name as string,
                discord: data?.discord as string,
                reddit: data?.reddit as string,
                telegram: data?.telegram as string,
                twitter: data?.twitter as string,
                youtube: data?.youtube as string,
              }}
            />
          </div>
        </div>

        <div className="mb-4">
          <CommunityVotes provider={data} />
        </div>

        <div className="mb-4">
          <CommunityComments provider={data} />
        </div>
      </Container>
      <SubscribeToEmail />
    </>
  );
};

export default ProfilePage;

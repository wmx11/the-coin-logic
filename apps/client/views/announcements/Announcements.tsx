import { Container, Text } from '@mantine/core';
import AnnouncementCard from 'components/AnnouncementCard';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import PaginationFilter from 'components/Filters/PaginationFilter';
import PerPageFilter from 'components/Filters/PerPageFilter';
import ProjectsFilter from 'components/Filters/ProjectsFilter';
import GrayBox from 'components/GrayBox';
import Meta from 'components/Meta';
import GradientTitle from 'components/Text/GradientTitle';
import useAnnouncementsFilter from 'hooks/useAnnouncementsFilter';
import { FC, useEffect } from 'react';
import { DiscordAnnouncement } from 'types';

type AnnouncementsProps = {
  announcements: DiscordAnnouncement[];
  count: number;
};

const Announcements: FC<AnnouncementsProps> = ({ announcements, count }) => {
  const {
    announcements: announcementsData,
    pagination,
    isLoading,
    setAnnouncements,
    setCount,
  } = useAnnouncementsFilter();

  useEffect(() => {
    setAnnouncements(announcements);
    setCount(count);
  }, []);

  return (
    <>
      <Meta
        title="Cryptocurrency, DeFi & NFT Projects' Announcements | Coin Logic"
        description="Stay up to date and track announcements of cryptocurrency, DeFi, and NFT projects listed on TheCoinLogic."
      />
      <SmallBackgroundWrapper>
        <div className="text-center">
          <GradientTitle>Projects' Announcements</GradientTitle>
          <Text size="sm" color="dimmed">
            We monitor the servers and aggregate all incoming new announcements in a single place. You can filter the
            announcements by project, directly view them in their Discord server, and share them with your social
            groups.
          </Text>
        </div>
      </SmallBackgroundWrapper>
      <Container className="py-10">
        <div className="my-4">
          <ProjectsFilter description="Choose a project to narrow down your results." />
        </div>

        {(announcementsData || announcements) && (announcementsData || announcements).length ? (
          <>
            <div className="grid grid-cols-1 gap-2">
              {(announcementsData || announcements).map((item, index) => {
                return (
                  <div key={`announcement_${index}`}>
                    <AnnouncementCard announcement={item} />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="py-10">
            <GrayBox>Looks like there are no announcements here 😮</GrayBox>
          </div>
        )}
        <div className="flex items-end justify-between gap-2">
          {pagination?.pages ? (
            <>
              <PaginationFilter pages={pagination?.pages as number} isLoading={isLoading} />
              <PerPageFilter />
            </>
          ) : null}
        </div>
      </Container>
    </>
  );
};

export default Announcements;

import { Text } from '@mantine/core';
import { ProjectTitle } from 'components/ProjectTitle';
import GradientText from 'components/Text/GradientText';
import { getUpcomingProjectsForTable } from 'data/getters/server/projects';
import { useCallback, useEffect, useState } from 'react';
import routes from 'routes';
import { UpcomingHighlights } from 'types/Project';
import { Icons } from 'utils/icons';
import toLocaleString from 'utils/toLocaleString';
import HighlightCard, { HighlightCardItem } from './HighlightCard';

const UpcomingProjectsHighlights = () => {
  const [data, setData] = useState<UpcomingHighlights[]>([]);

  const getUpcomingProjects = useCallback(async () => {
    const projects = await getUpcomingProjectsForTable(5);
    setData(projects);
  }, []);

  useEffect(() => {
    getUpcomingProjects();
  }, []);

  return (
    <HighlightCard title="Upcoming Projects" icon={<Icons.Fresh />} moreLink={routes.upcomingProjects}>
      {data && data?.length ? (
        data.map(({ name, change, logo, slug, total, positivePercentage, negativePercentage, isPromoted }, index) => {
          const Content = () => {
            return (
              <div className="flex justify-between items-center w-full gap-2 flex-wrap">
                <ProjectTitle
                  title={name}
                  avatar={logo}
                  size="sm"
                  component="a"
                  href={`${routes.project}/${slug}`}
                  isPromoted={isPromoted}
                />
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <Text size="xs" className="text-green-500">
                      {positivePercentage}%
                    </Text>
                    <Text size="xs">/</Text>
                    <Text size="xs" className="text-red-500">
                      {negativePercentage}%
                    </Text>
                  </div>

                  <GradientText size="xs" color="dimmed">
                    {toLocaleString(total || 0) || 0} votes
                  </GradientText>
                </div>
              </div>
            );
          };
          return <HighlightCardItem index={index + 1} key={`project_highlight_${index}`} content={<Content />} />;
        })
      ) : (
        <Text size="xs" color="dimmed">
          There are no upcoming projects
        </Text>
      )}
    </HighlightCard>
  );
};

export default UpcomingProjectsHighlights;

import { Text } from '@mantine/core';
import { ProjectTitle } from 'components/ProjectTitle';
import GradientText from 'components/Text/GradientText';
import { Trend } from 'components/Trend';
import { FC } from 'react';
import routes from 'routes';
import { Icons } from 'utils/icons';
import toLocaleString from 'utils/toLocaleString';
import HighlightCard, { HighlightCardItem } from './HighlightCard';
import { TrendingHighlights } from 'types/Project';

const TrendingProjectsHighlights: FC<TrendingHighlights> = ({ trendingHighlights }) => {
  return (
    <HighlightCard title="Trending" icon={<Icons.Fire />} moreLink={routes.projects}>
      {trendingHighlights?.length ? (
        trendingHighlights.map(({ name, change, logo, slug, total, isPromoted }, index) => {
          const Content = () => {
            return (
              <div className="flex justify-between items-center w-full">
                <ProjectTitle title={name} avatar={logo} size="sm" component="a" href={`${routes.project}/${slug}`} isPromoted={isPromoted} />
                <div className="text-right">
                  <Trend inline={true} previousValue={{ change, percentage: change }} />
                  <GradientText size="xs" color="dimmed">
                    +{toLocaleString(total || 0) || 0} votes
                  </GradientText>
                </div>
              </div>
            );
          };
          return <HighlightCardItem index={index + 1} key={`project_highlight_${index}`} content={<Content />} />;
        })
      ) : (
        <Text size="xs" color="dimmed">
          There are no trending projects
        </Text>
      )}
    </HighlightCard>
  );
};

export default TrendingProjectsHighlights;

import { FC } from 'react';
import { IoShareSocialSharp } from 'react-icons/io5';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { formateDateWithHours } from 'utils/formatters';
import { StatsTabGroup } from '../../../StatsTabGroup';
import { getData } from './getData';

type SocialAnalysisDataProps = {
  data: ProjectWithMarketStatsAndChanges;
};

const SocialAnalysisData: FC<SocialAnalysisDataProps> = ({ data }) => {
  const { slug, trackSocials, id } = data.project;
  const socialMediaData = trackSocials ? getData(data) : [];

  return (
    <StatsTabGroup
      Icon={IoShareSocialSharp}
      untrackedMessage={trackSocials ? '' : 'This project has social media data tracking disabled.'}
      section="socialMediaData"
      title="Social Media Data"
      data={socialMediaData}
      subtitle={`Last Updated: ${formateDateWithHours(data?.socialsDateAdded as string) || ''}`}
      slug={slug as string}
      projectId={id}
    />
  );
};

export default SocialAnalysisData;

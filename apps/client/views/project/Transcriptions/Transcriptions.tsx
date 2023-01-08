import ContentCard from 'components/ContentCollection/ContentCard';
import GrayBox from 'components/GrayBox';
import TitleWithIcon from 'components/TitleWithIcon';
import { QUERY_PROJECT } from 'constants/general';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';
import { Content } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { Icons } from 'utils/icons';

type TranscriptionsProps = {
  data: ProjectWithMarketStatsAndChanges;
};

const Transcriptions: FC<TranscriptionsProps> = ({ data }) => {
  const { transcriptions, project } = data;

  return (
    <div>
      <TitleWithIcon title="Transcriptions" Icon={Icons.Text} />
      <div className="flex gap-4 justify-between items-center flex-col md:flex-row">
        {transcriptions && transcriptions.length ? (
          <div className="flex gap-4 flex-col md:flex-row">
            {transcriptions.map((content, index) => (
              <ContentCard
                data={content as unknown as Content}
                key={`transcript_${index}`}
                showImage={false}
                baseRoute={routes.transcription}
              />
            ))}
          </div>
        ) : (
          <GrayBox className="flex-1">No transcriptions here 😮</GrayBox>
        )}
        {transcriptions && transcriptions.length ? (
          <div className="flex gap-2 items-center text-sm text-violet mt-8 md:mt-0">
            <Link href={`${routes.transcriptions}?${QUERY_PROJECT}=${project?.slug}`}>
              <a>See more</a>
            </Link>
            <div className="mt-1">
              <Icons.ChevronRight />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Transcriptions;

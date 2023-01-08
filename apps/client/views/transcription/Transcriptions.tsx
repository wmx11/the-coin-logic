import { ContentCardsCollection } from 'components/ContentCollection';
import PaginationFilter from 'components/Filters/PaginationFilter';
import PerPageFilter from 'components/Filters/PerPageFilter';
import ProjectsFilter from 'components/Filters/ProjectsFilter';
import GrayBox from 'components/GrayBox';
import useTranscriptionsFilter from 'hooks/useTranscriptionsFilter';
import { FC, useEffect } from 'react';
import routes from 'routes';
import { Content, Transcription } from 'types';

type TranscriptionsProps = {
  data: Transcription[];
  count: number;
};

const Transcriptions: FC<TranscriptionsProps> = ({ data, count }) => {
  const { transcriptions, pagination, isLoading, setTranscriptions, setCount } = useTranscriptionsFilter();

  useEffect(() => {
    setTranscriptions(data);
    setCount(count);
  }, []);

  return (
    <div>
      <div className="my-4">
        <ProjectsFilter description="Choose a project to narrow down your results." />
      </div>

      {(transcriptions || data) && (transcriptions || data).length ? (
        <ContentCardsCollection
          data={(transcriptions || data) as Content[]}
          showImage={false}
          baseRoute={routes.transcription}
          fallbackRoute={routes.transcriptionId}
        />
      ) : (
        <div className="py-10">
          <GrayBox>Looks like there are no transcripts here 😮</GrayBox>
        </div>
      )}

      <div className="flex items-end justify-between gap-2 mt-4">
        {pagination?.pages ? (
          <>
            <PaginationFilter pages={pagination?.pages as number} isLoading={isLoading} />
            <PerPageFilter />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Transcriptions;

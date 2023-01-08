import GrayBox from 'components/GrayBox';
import QuizCard from 'components/Quiz/QuizCard';
import TitleWithIcon from 'components/TitleWithIcon';
import { QUERY_PROJECT } from 'constants/general';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { Icons } from 'utils/icons';

type InteractionsProps = {
  data: ProjectWithMarketStatsAndChanges;
};

const Interactions: FC<InteractionsProps> = ({ data }) => {
  const { quizzes, project } = data;

  return (
    <div>
      <TitleWithIcon title="Interactions" Icon={Icons.Game} />
      <div className="flex gap-4 justify-between items-center flex-col md:flex-row">
        {quizzes && quizzes.length ? (
          <div className="flex gap-4 flex-col md:flex-row">
            {quizzes.map((quiz, index) => (
              <QuizCard quiz={quiz} key={`quiz_post_${index}`} />
            ))}
          </div>
        ) : (
          <GrayBox className="flex-1">No interactions here 😮</GrayBox>
        )}
        {quizzes && quizzes.length ? (
          <div className="flex gap-2 items-center text-sm text-violet mt-8 md:mt-0">
            <Link href={`${routes.quizzes}?${QUERY_PROJECT}=${project.slug}`}>
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

export default Interactions;

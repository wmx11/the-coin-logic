import { Container, Text } from '@mantine/core';
import PaginationFilter from 'components/Filters/PaginationFilter';
import PerPageFilter from 'components/Filters/PerPageFilter';
import ProjectsFilter from 'components/Filters/ProjectsFilter';
import GrayBox from 'components/GrayBox';
import Meta from 'components/Meta';
import Quizzes from 'components/Quiz/Quizzes';
import GradientTitle from 'components/Text/GradientTitle';
import { PER_PAGE } from 'constants/general';
import { getQuizzes } from 'data/getters/product';
import useQuizzesFilter from 'hooks/useQuizzesFilter';
import React, { FC, useEffect } from 'react';
import { Quiz } from 'types';

type QuizzesProps = {
  quizzes: Quiz[];
  quizzesCount: number;
};

const QuizzesPage: FC<QuizzesProps> = ({ quizzes, quizzesCount }) => {
  const { quizzes: data, pagination, isLoading, setQuizzes, setCount } = useQuizzesFilter();

  useEffect(() => {
    setQuizzes(quizzes);
    setCount(quizzesCount);
  }, []);

  return (
    <>
      <Meta
        title="Cryptocurrency project quizzes. Test your knowledge, earn rewards | Coin Logic"
        description="Test your knowledge by taking projects specific quizzes and win rewards!"
      />
      <Container className="py-10">
        <div className="mb-8">
          <GradientTitle>Project Quizzes</GradientTitle>
          <Text size="xs" color="dimmed">
            Projects can create quizzes and distribute rewards to winners. Test your knowledge by taking TCL quizzes and
            be eligible to earn rewards!
          </Text>
        </div>
        <div className="my-4">
          <ProjectsFilter description="Choose a project to narrow down your results." />
        </div>

        {(data || quizzes) && (data || quizzes).length ? (
          <Quizzes data={data || quizzes} />
        ) : (
          <div className="py-10">
            <GrayBox>No articles were found by given search parameters.</GrayBox>
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
      </Container>
      ;
    </>
  );
};

export default QuizzesPage;

export const getServerSideProps = async () => {
  const [quizzes, quizzesCount] = await getQuizzes({
    take: PER_PAGE,
    skip: 0,
    limit: 0,
  });

  return {
    props: {
      quizzes,
      quizzesCount,
    },
  };
};

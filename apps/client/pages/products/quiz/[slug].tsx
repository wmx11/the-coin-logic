import { Container } from '@mantine/core';
import { getQuizBySlug } from 'data/getters/product';
import { GetServerSideProps } from 'next';
import { FC, useState } from 'react';
import { Quiz } from 'types';
import QuizGame from 'views/quiz/QuizGame';
import QuizPage from 'views/quiz/QuizPage';

type QuizProps = {
  quiz: Quiz;
};

const Quiz: FC<QuizProps> = ({ quiz }) => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <Container className="py-10">
      {hasStarted ? <QuizGame quiz={quiz} /> : <QuizPage quiz={quiz} startQuiz={() => setHasStarted(true)} />}
    </Container>
  );
};

export default Quiz;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  const quiz = await getQuizBySlug(slug as string);

  return {
    props: {
      quiz,
    },
  };
};

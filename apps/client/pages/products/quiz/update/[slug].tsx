import { QUERY_PROJECT_ID } from 'constants/general';
import { isProjectEditor } from 'data/api/utils/isProjectEditor';
import { getQuizBySlug } from 'data/getters/product';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { FC } from 'react';
import { Quiz } from 'types';
import CreateOrUpdateQuiz from 'views/quiz/CreateOrUpdateQuiz';

type UpdateQuizProps = {
  quiz: Quiz;
};

const updateQuiz: FC<UpdateQuizProps> = ({ quiz }) => {
  return <CreateOrUpdateQuiz quiz={quiz} isUpdate />;
};

export default updateQuiz;

export const getServerSideProps: GetServerSideProps = async ({ req, params, query }) => {
  const slug = params?.slug;
  const quiz = await getQuizBySlug(slug as string);
  const session = await getSession({ req });
  const canEditProject = await isProjectEditor({ userId: session?.id as string, projectId: query[QUERY_PROJECT_ID] as string });

  if (!session || !canEditProject || session?.id !== quiz?.user?.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      quiz,
    },
  };
};

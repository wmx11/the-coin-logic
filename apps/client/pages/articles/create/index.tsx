import { QUERY_PROJECT } from 'constants/general';
import { isProjectEditor } from 'data/api/utils/isProjectEditor';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import CreateOrUpdateArticle from 'views/articles/project/CreateOrUpdateArticle';

const article = () => {
  return <CreateOrUpdateArticle />;
};

export default article;

export const getServerSideProps: GetServerSideProps = async ({ req, params, query }) => {
  const session = await getSession({ req });
  const canEditProject = await isProjectEditor({ userId: session?.id as string, slug: query[QUERY_PROJECT] as string });
  if (!session || !canEditProject) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

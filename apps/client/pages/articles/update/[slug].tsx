import { QUERY_PROJECT } from 'constants/general';
import { isProjectEditor } from 'data/api/utils/isProjectEditor';
import { getBlogContentBySlug } from 'data/getters';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { FC } from 'react';
import { Content } from 'types';
import CreateOrUpdateArticle from 'views/articles/project/CreateOrUpdateArticle';

type Props = {
  article?: Content;
};

const article: FC<Props> = ({ article }) => {
  return <CreateOrUpdateArticle article={article} isUpdate />;
};

export default article;

export const getServerSideProps: GetServerSideProps = async ({ req, params, query }) => {
  const slug = params?.slug;
  const session = await getSession({ req });
  const canEditProject = await isProjectEditor({ userId: session?.id as string, slug: query[QUERY_PROJECT] as string });
  const content = await getBlogContentBySlug(slug as string);

  if (!session || !canEditProject || session?.id !== content?.user?.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      article: content,
    },
  };
};

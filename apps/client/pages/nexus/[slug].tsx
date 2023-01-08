import { getProviderBySlug } from 'data/getters/providers';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { FC } from 'react';
import routes from 'routes';
import { Provider } from 'types';
import ProfilePage from 'views/nexus/ProfilePage';

type ProviderBySlugPageProps = {
  data: Provider;
};

const ProviderBySlugPage: FC<ProviderBySlugPageProps> = ({ data }) => {
  return <ProfilePage data={data} />;
};

export default ProviderBySlugPage;

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });
  const data: Provider = await getProviderBySlug(params?.slug as string);

  if (data?.enabled === false && (session?.id === data?.user?.id) === false && session?.isAdmin === false) {
    return {
      redirect: {
        destination: routes.nexus,
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: (data as unknown as Provider) || null,
    },
  };
};

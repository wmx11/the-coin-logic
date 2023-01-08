import { getProviderByIdForUser } from 'data/getters/providers';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { ReactElement } from 'react';
import { prismaClient } from 'tcl-packages/prismaClient';
import { Provider } from 'types';
import MyNexus from 'views/profile/Nexus/MyNexus';
import PendingProviders from 'views/profile/Nexus/PendingProviders';
import UserLayout from 'views/profile/ProfileLayout';

type MyNexusPageProps = {
  provider: Provider;
  pendingProviders: Provider[];
};

const MyNexusPage = ({ provider, pendingProviders }: MyNexusPageProps) => {
  return (
    <div className="w-full">
      <MyNexus provider={provider} />
      {pendingProviders && pendingProviders?.length ? (
        <div className="mt-16">
          <PendingProviders pendingProviders={pendingProviders} />
        </div>
      ) : null}
    </div>
  );
};

export default MyNexusPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const pendingProviders: Provider[] = [];

  const providerId = await prismaClient?.user.findUnique({
    where: {
      id: (session?.id as string) || '',
    },
    select: {
      providerProfile: {
        select: {
          id: true,
        },
      },
    },
  });

  if (session?.isAdmin) {
    const pendingProviderIds = await prismaClient?.provider.findMany({
      where: {
        enabled: false,
      },
      select: {
        id: true,
      },
    });

    if (pendingProviderIds) {
      for (const item of pendingProviderIds) {
        const data = await getProviderByIdForUser((item.id as string) || (session?.id as string));
        pendingProviders.push(data);
      }
    }
  }

  let provider;

  if (providerId?.providerProfile?.id) {
    provider = await getProviderByIdForUser((providerId?.providerProfile?.id as string) || (session?.id as string));
  }

  return {
    props: {
      provider: provider || null,
      pendingProviders: pendingProviders || null,
    },
  };
};

MyNexusPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

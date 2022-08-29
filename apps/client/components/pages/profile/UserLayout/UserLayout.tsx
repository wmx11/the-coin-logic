import { Container, Skeleton } from '@mantine/core';
import useUser from 'hooks/useUser';
import React, { PropsWithChildren, useEffect } from 'react';
import useUserStore from 'store/useUserStore';
import { User } from 'types';
import UserNavigation from '../ProfileNavigation';

const UserLayout = (props: PropsWithChildren) => {
  const { user, status } = useUser();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    setUser(user as User);
  }, [user]);

  if (status === 'loading') {
    return (
      <Container className="py-10 min-h-screen">
        <Skeleton />
      </Container>
    );
  }

  return (
    <Container className="py-10 min-h-screen">
      <div className="flex">
        <div className="w-full md:max-w-[200px] pr-5 mr-5 border-r h-screen">
          <UserNavigation />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-8 mb-4">{props.children}</div>
        </div>
      </div>
    </Container>
  );
};

export default UserLayout;

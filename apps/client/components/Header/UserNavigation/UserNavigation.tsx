import { useSession } from 'next-auth/react';
import React, { FC, useState } from 'react';
import UnaunthenticatedNavigation from './UnaunthenticatedNavigation';
import AuhenticatedNavigation from './AuhenticatedNavigation';

type UserNavigationProps = {
  setIsOpen?: (type: boolean) => void;
};

const UserNavigation: FC<UserNavigationProps> = ({ setIsOpen }) => {
  const { data: session, status } = useSession();

  switch (status) {
    case 'unauthenticated':
      return <UnaunthenticatedNavigation />;
    case 'loading':
      return <UnaunthenticatedNavigation />;
    case 'authenticated':
      return <AuhenticatedNavigation session={session} setIsOpen={setIsOpen} />;
    default:
      return <UnaunthenticatedNavigation />;
  }
};

export default UserNavigation;

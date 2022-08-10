import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import UnaunthenticatedNavigation from './UnaunthenticatedNavigation';
import AuhenticatedNavigation from './AuhenticatedNavigation';

const UserNavigation = () => {
  const { data: session, status } = useSession();

  switch (status) {
    case 'unauthenticated':
      return <UnaunthenticatedNavigation />;
    case 'loading':
      return <UnaunthenticatedNavigation />;
    case 'authenticated':
      return <AuhenticatedNavigation session={session} />;
    default:
      return <UnaunthenticatedNavigation />;
  }
};

export default UserNavigation;

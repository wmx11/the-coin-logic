import { Divider, Text } from '@mantine/core';
import MenuNavLink from 'components/MenuNavLink';
import { SESSION_TOKEN } from 'constants/general';
import useLocalStorage from 'hooks/useLocalStorage';
import useUser from 'hooks/useUser';
import { signOut } from 'next-auth/react';
import { FC } from 'react';
import routes from 'routes';
import { Icons } from 'utils/icons';

type UserNavigationLinksProps = {
  isInMenuProvider?: boolean;
  setIsOpen?: (type: boolean) => void;
};

const UserNavigationLinks: FC<UserNavigationLinksProps> = ({ isInMenuProvider, setIsOpen }) => {
  const { user } = useUser();
  const onClick = setIsOpen ? () => setIsOpen(false) : () => false;
  const [storedValue, setValue] = useLocalStorage(SESSION_TOKEN, '');

  return (
    <>
      <MenuNavLink href={routes.profile} icon={<Icons.User />} isInMenu={isInMenuProvider} onClick={onClick}>
        Profile
      </MenuNavLink>

      <MenuNavLink href={routes.addProject} icon={<Icons.AddProject />} isInMenu={isInMenuProvider} onClick={onClick}>
        Add project
      </MenuNavLink>

      <MenuNavLink href={routes.myProjects} icon={<Icons.Projects />} isInMenu={isInMenuProvider} onClick={onClick}>
        My projects
      </MenuNavLink>

      {user?.providerProfile?.id || user?.isAdmin ? (
        <MenuNavLink href={routes.myNexus} icon={<Icons.Nexus />} isInMenu={isInMenuProvider} onClick={onClick}>
          My Nexus
        </MenuNavLink>
      ) : null}

      {!user?.providerProfile?.id || user?.isAdmin ? (
        <MenuNavLink href={routes.applyForNexus} icon={<Icons.Add />} isInMenu={isInMenuProvider} onClick={onClick}>
          Apply For Nexus
        </MenuNavLink>
      ) : null}

      <MenuNavLink href={routes.marketingTracker} icon={<Icons.Track />} isInMenu={isInMenuProvider} onClick={onClick}>
        Marketing Tracker
      </MenuNavLink>

      <MenuNavLink href={routes.funding} icon={<Icons.Money />} isInMenu={isInMenuProvider} onClick={onClick}>
        Funding
      </MenuNavLink>

      {/* @TODO - Return this with proper invoices generated from Orders */}
      {/* 
      <MenuNavLink href="/profile/payments" icon={<MdPayments />} isInMenu={isInMenuProvider} onClick={onClick}>
        Invoices
      </MenuNavLink> */}

      <Divider className="my-2" />

      <MenuNavLink
        icon={<Icons.LogOut />}
        isInMenu={isInMenuProvider}
        onClick={() => {
          setValue('');
          signOut({ redirect: true, callbackUrl: '/' });
        }}
      >
        <Text size="xs">Log Out</Text>
      </MenuNavLink>
    </>
  );
};

export default UserNavigationLinks;

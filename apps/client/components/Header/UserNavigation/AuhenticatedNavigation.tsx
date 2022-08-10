import { Avatar, Divider, Menu, Text, UnstyledButton } from '@mantine/core';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import React, { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { FaUserCog } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

type SessionProps = {
  session: Session;
};

type MenuNavLinkProps = {
  href: string;
  children: string;
  icon?: ReactNode;
};

const MenuNavLink: FC<MenuNavLinkProps> = ({ href, icon, children }) => {
  return (
    <Menu.Item icon={icon} color="violet">
      <UnstyledButton component="a" href={href}>
        <Text size="xs">{children}</Text>
      </UnstyledButton>
    </Menu.Item>
  );
};

const AuhenticatedNavigation: FC<SessionProps> = ({ session }) => {
  return (
    <div className="flex gap-4 items-center">
      <Menu
        shadow="md"
        trigger="hover"
        control={
          <Avatar color="violet" src={null} size="md" radius="xl">
            {session?.user?.name?.slice(0, 2).toUpperCase()}
          </Avatar>
        }
      >
        <Menu.Label>{session?.user?.name}</Menu.Label>

        <MenuNavLink href="/profile" icon={<FaUserCog />}>
          Profile
        </MenuNavLink>

        <Divider />
        <Menu.Item icon={<FiLogOut />} color="violet">
          <UnstyledButton onClick={() => signOut({ redirect: false })}>
            <Text size="xs">Log Out</Text>
          </UnstyledButton>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default AuhenticatedNavigation;

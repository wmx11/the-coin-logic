import { HoverCard, Text } from '@mantine/core';
import useMobileScreen from 'hooks/useMobileScreen';
import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode, forwardRef } from 'react';
import routes from 'routes';
import { Icons } from 'utils/icons';

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  mobileClassName?: string;
  withArrow?: boolean;
  leftIcon?: ReactNode;
  description?: string;
};

type NavigationProps = {
  setIsOpen?: (type: boolean) => void;
};

const Navigation: FC<NavigationProps> = ({ setIsOpen }) => {
  const { isMobileScreen } = useMobileScreen();

  const NavLink = forwardRef<HTMLDivElement, NavLinkProps>((props, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="w-full md:w-auto"
        onClick={isMobileScreen && setIsOpen ? () => setIsOpen(false) : undefined}
      >
        <Link href={props.href}>
          <a
            className={`${
              props.className
            } font-semibold hover:text-purple-300 transition-colors md:text-sm lg:text-base ${
              isMobileScreen && `${props.mobileClassName} 'w-full p-3 mb-2 block bg-violet/10 text-white rounded-md'`
            }`}
          >
            <span className="flex gap-2 items-center">
              {props.leftIcon ? props.leftIcon : null}
              {props.label}
              {!isMobileScreen && props.withArrow ? <Icons.ChevronDown className="text-xs mt-1" /> : null}
            </span>
            {!isMobileScreen && props.description ? (
              <Text size="xs" color="dimmed">
                {props.description}
              </Text>
            ) : null}
          </a>
        </Link>
      </div>
    );
  });

  type WithDropdown = {
    dropdown: {
      route: string;
      label: string;
      icon?: ReactNode;
      description?: string;
    }[];
  } & PropsWithChildren;

  const DropdownMenu = ({ children, dropdown }: WithDropdown) => {
    if (!children) {
      return null;
    }

    const dropdownElements =
      dropdown &&
      dropdown.map((item, index) => {
        return (
          <NavLink
            href={item.route}
            label={item.label}
            description={item.description}
            className="md:text-violet"
            leftIcon={item.icon}
            key={`dropdown_link_${index}`}
          />
        );
      });

    if (isMobileScreen) {
      return (
        <>
          {children}
          {dropdownElements}
        </>
      );
    }

    return (
      <HoverCard width={320} shadow="md" withArrow>
        <HoverCard.Target>{children}</HoverCard.Target>
        <HoverCard.Dropdown>
          <div className="flex flex-col gap-y-6">{dropdownElements}</div>
        </HoverCard.Dropdown>
      </HoverCard>
    );
  };

  return (
    <div className={`flex justify-between text-white py-4 ${isMobileScreen && 'flex-col items-center'}`}>
      <div className={`flex gap-x-8 items-center ${isMobileScreen && 'flex-col mb-8 text-center w-full'} `}>
        <NavLink href={routes.projects} label="Projects" />
        <DropdownMenu
          dropdown={[
            {
              route: routes.events,
              label: 'Discord Events',
              icon: <Icons.Event />,
              description: 'Discover project events with our Discord Events integration',
            },
            {
              route: routes.announcements,
              label: 'Discord Announcements',
              icon: <Icons.Announcement />,
              description: 'Keep track of the latest project announcements with our Discord Announcements integration',
            },
            {
              route: routes.quizzes,
              label: 'Quizzes',
              icon: <Icons.Quiz />,
              description: 'Test your knowledge by taking project specific quizzes and win rewards!',
            },
          ]}
        >
          <NavLink href={routes.pricing} label="Products" withArrow />
        </DropdownMenu>
        <NavLink href={routes.services} label="Services" />
        <NavLink href={routes.articles} label="Articles" />
      </div>
    </div>
  );
};

export default Navigation;

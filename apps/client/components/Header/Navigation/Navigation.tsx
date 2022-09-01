import { Divider } from '@mantine/core';
import useMobileScreen from 'hooks/useMobileScreen';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';

type NavLinkProps = {
  href: string;
  label: string;
};

type NavigationProps = {
  setIsOpen?: (type: boolean) => void;
};

const Navigation: FC<NavigationProps> = ({ setIsOpen }) => {
  const { isMobileScreen } = useMobileScreen();

  const NavLink: FC<NavLinkProps> = ({ href, label }) => {
    return (
      <div className="w-full md:w-auto" onClick={isMobileScreen && setIsOpen ? () => setIsOpen(false) : undefined}>
        <Link href={href}>
          <a
            className={`font-bold hover:text-purple-300 transition-colors ${
              isMobileScreen && 'w-full p-3 mb-2 block bg-violet/10 text-violet rounded-md'
            }`}
          >
            {label}
          </a>
        </Link>
      </div>
    );
  };

  return (
    <div className={`flex justify-between text-white py-4 ${isMobileScreen && 'flex-col items-center'}`}>
      <div className={`flex gap-x-8 items-center ${isMobileScreen && 'flex-col mb-8 text-center w-full'} `}>
        <NavLink href={routes.services} label="Services" />
        <NavLink href={routes.resources} label="Resources" />
        <NavLink href={routes.aboutUs} label="About Us" />
        <NavLink href={routes.roadmap} label="Roadmap" />
        <NavLink href={routes.pricing} label="Pricing" />
      </div>
    </div>
  );
};

export default Navigation;

import { Container } from '@mantine/core';
import BackgroundWrapper from 'components/BackgroundWrapper';
import { Discord, Twitter } from 'components/Socials/Socials';
import Image from 'next/image';
import Link from 'next/link';
import tclLogo from 'public/images/tcl_logo.png';
import routes from 'routes';
import useThemeStore from 'store/useThemeStore';
import { themeConfig } from 'utils/theme';

function Footer() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <BackgroundWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="3840" height="70" className="rotate-180">
        <g>
          <path
            stroke="null"
            fill={themeConfig[theme].backgroundColor}
            d="m0,2l213.66669,9.31875c213.66669,9.49375 641.00007,27.86875 1068.33346,30.3625c427.33338,2.31875 854.66677,-11.68125 1282.00015,-11.68125c427.33338,0 854.66677,14 1068.33346,21l213.66669,7l0,14l-213.66669,0c-213.66669,0 -641.00007,0 -1068.33346,0c-427.33338,0 -854.66677,0 -1282.00015,0c-427.33338,0 -854.66677,0 -1068.33346,0l-213.66669,0l0,-70z"
            id="svg_1"
          />
        </g>
      </svg>
      <Container>
        <footer className="footer py-20 text-white">
          <div>
            <span className="footer-title">Services</span>
            <Link href={`${routes.services}?service=tracking`}>
              <a className="link link-hover">Listing & Tracking</a>
            </Link>
            <Link href={`${routes.services}?service=tbaas`}>
              <a className="link link-hover">Trustless Bridging as a Service</a>
            </Link>
            <Link href={`${routes.services}?service=audits`}>
              <a className="link link-hover">Audits</a>
            </Link>
            <Link href={`${routes.services}?service=kyc`}>
              <a className="link link-hover">KYC</a>
            </Link>
            <Link href={`${routes.services}?service=marketing`}>
              <a className="link link-hover">Marketing</a>
            </Link>
            <Link href={`${routes.services}?service=community`}>
              <a className="link link-hover">Community Events</a>
            </Link>
            <Link href={`${routes.services}?service=ama`}>
              <a className="link link-hover">AMAs</a>
            </Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link href={routes.aboutUs}>
              <a className="link link-hover">About us</a>
            </Link>
            <Link href={routes.contact}>
              <a className="link link-hover">Contact us</a>
            </Link>
            <a className="link link-hover" href="https://docs.thecoinlogic.com/" target="_blank">
              Whitepaper
            </a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link href={routes.termsOfServices}>
              <a className="link link-hover">Terms and services</a>
            </Link>
            <Link href={routes.privacyPolicy}>
              <a className="link link-hover">Privacy policy</a>
            </Link>
            <Link href={routes.cookiePolicy}>
              <a className="link link-hover">Cookie policy</a>
            </Link>
            <a className="link link-hover" href="#" id="open_preferences_center">
              Update cookies preferences
            </a>
            <Link href={routes.disclaimer}>
              <a className="link link-hover">Disclaimer</a>
            </Link>
          </div>
        </footer>
        <footer className="footer py-10 border-t text-white border-base-300">
          <div className="items-center grid-flow-col">
            <Image src={tclLogo} alt="TCL Logo" width={30} height={35} />
            <p className="mr-2">
              The Coin Logic <br />
              Owned and Created by MB Modiggo
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <Discord />
              <Twitter />
            </div>
          </div>
        </footer>
      </Container>
    </BackgroundWrapper>
  );
}

export default Footer;

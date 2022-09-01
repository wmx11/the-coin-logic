import { Container } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import routes from 'routes';
import tclLogo from 'public/images/tcl_logo.png';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { Discord, Twitter } from 'components/Socials/Socials';

function Footer() {
  return (
    <div className="bg-[url('../public/images/wave4.svg')] bg-no-repeat bg-cover bg-bottom w-full">
      <Container>
        <footer className="footer p-10 text-white">
          <div>
            <span className="footer-title">Services</span>
            <Link href={routes.services}>
              <a className="link link-hover">Listing & Tracking</a>
            </Link>
            <Link href={routes.services}>
              <a className="link link-hover">Audits</a>
            </Link>
            <Link href={routes.services}>
              <a className="link link-hover">KYC</a>
            </Link>
            <Link href={routes.services}>
              <a className="link link-hover">Marketing</a>
            </Link>
            <Link href={routes.services}>
              <a className="link link-hover">Community Events</a>
            </Link>
            <Link href={routes.services}>
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
            <Link href={routes.disclaimer}>
              <a className="link link-hover">Disclaimer</a>
            </Link>
          </div>
        </footer>
        <footer className="footer px-10 py-10 border-t text-white border-base-300">
          <div className="items-center grid-flow-col">
            <Image src={tclLogo} alt="TCL Logo" width={30} height={35} />
            <p>
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
    </div>
  );
}

export default Footer;

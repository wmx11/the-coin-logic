import { isDev } from 'utils/utils';

const TEXT_CONTENT = '/text-content';

const routes = {
  aboutUs: `/about-us`,
  advertisement: `${TEXT_CONTENT}/advertisement`,
  branding: `${TEXT_CONTENT}/branding`,
  contact: `/contact-us`,
  cookiePolicy: `/cookie-policy`,
  disclaimer: `/disclaimer`,
  marketing: `${TEXT_CONTENT}/marketing`,
  pricing: `/pricing`,
  privacyPolicy: `/privacy-policy`,
  projects: `/projects`,
  project: `/project`,
  referAProject: `${TEXT_CONTENT}/refer-a-project`,
  referral: `${process.env.NEXT_PUBLIC_BASE_URL}?ref=`,
  resources: `/resources`,
  roadmap: `/roadmap`,
  services: `/services`,
  termsOfServices: `/terms`,
  marketingTracker: '/profile/marketing-tracker',
  marketingTrackerExternalLink: isDev
    ? 'https://b067475d75290e.lhr.life/${campaignId}/${target}'
    : 'https://${target}.tclmt.io/${campaignId}',
};

export default routes;

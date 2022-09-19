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
  referAProject: `${TEXT_CONTENT}/refer-a-project`,
  referral: `${process.env.NEXT_PUBLIC_BASE_URL}?ref=`,
  resources: `/resources`,
  roadmap: `/roadmap`,
  services: `/services`,
  termsOfServices: `/terms`,
};

export default routes;

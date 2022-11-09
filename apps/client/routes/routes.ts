import { isDev } from 'utils/utils';

const TEXT_CONTENT = '/text-content';
const PROFILE = '/profile';
const MARKETING_TRACKER = `${PROFILE}/marketing-tracker`;
const API = isDev ? 'http://localhost:3000/api' : 'https://thecoinlogic.com/api';

const routes = {
  aboutUs: `/about-us`,
  articles: `/articles`,
  advertisement: `${TEXT_CONTENT}/advertisement`,
  branding: `${TEXT_CONTENT}/branding`,
  contact: `/contact-us`,
  checkout: {
    index: '/checkout',
    success: '/checkout/success',
  },
  cart: '/cart',
  cookiePolicy: `/cookie-policy`,
  disclaimer: `/disclaimer`,
  marketing: `${TEXT_CONTENT}/marketing`,
  pricing: `/pricing`,
  privacyPolicy: `/privacy-policy`,
  projects: `/projects`,
  project: `/project`,
  addProject: `${PROFILE}/add-project`,
  myProjects: `${PROFILE}/my-projects`,
  referAProject: `${TEXT_CONTENT}/refer-a-project`,
  referral: `${process.env.NEXT_PUBLIC_BASE_URL}?ref=`,
  resources: `/resources`,
  roadmap: `/roadmap`,
  services: `/services`,
  termsOfServices: `/terms`,
  marketingTracker: MARKETING_TRACKER,
  marketingTrackerCampaign: `${MARKETING_TRACKER}/campaign/${'${campaignId}'}`,
  marketingTrackerCampaignUpdate: `${MARKETING_TRACKER}/update/${'${campaignId}'}`,
  marketingTrackerExternalLink: isDev
    ? 'http://localhost:2000/${campaignId}/${target}'
    : 'https://${target}.tclmt.io/${campaignId}',
  api: {
    cart: {
      createCart: `${API}/cart/create-cart`,
      updateCart: `${API}/cart/update-cart`,
      getCart: `${API}/cart/get-cart`,
      addItem: `${API}/cart/add-item`,
      placeOrder: `${API}/cart/place-order`,
      clearCart: `${API}/cart/clear-cart`,
    },
    order: {
      createOrder: `${API}/order/create-order`,
      addItem: `${API}/order/add-item`,
    },
    project: {
      rate: `${API}/project/rate`,
      rateCheck: `${API}/project/rate-check`,
      getRates: `${API}/project/get-rates`,
    },
    user: {
      initSubscription: `${API}/user/init-subscription`,
    },
  },
};

export default routes;

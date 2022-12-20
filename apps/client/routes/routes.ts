import { isDev } from 'utils/utils';

const TEXT_CONTENT = '/text-content';
const PROFILE = '/profile';
const MARKETING_TRACKER = `${PROFILE}/marketing-tracker`;
const API = isDev ? 'http://localhost:3000/api' : 'https://thecoinlogic.com/api';
const DISCORD_API = process.env.NEXT_PUBLIC_DISCORD_API;

const routes = {
  base: isDev ? 'http://localhost:3000' : 'https://thecoinlogic.com',
  aboutUs: `/about-us`,
  articles: `/articles`,
  articleCreate: `/articles/create`,
  articleUpdate: '/articles/update/${slug}',
  quiz: '/products/quiz/${slug}',
  quizzes: '/products/quiz',
  quizCreate: `/products/quiz/create`,
  quizUpdate: '/products/quiz/update/${slug}',
  advertisement: `${TEXT_CONTENT}/advertisement`,
  announcements: '/announcements',
  branding: `${TEXT_CONTENT}/branding`,
  blogPost: '/blog-post/${slug}',
  contact: `/contact-us`,
  checkout: {
    index: '/checkout',
    success: '/checkout/success',
  },
  cart: '/cart',
  cookiePolicy: `/cookie-policy`,
  disclaimer: `/disclaimer`,
  discordConfig: `${PROFILE}/discord/${'${guildId}'}?id=${'${configId}'}&projectId=${'${projectId}'}`,
  marketing: `${TEXT_CONTENT}/marketing`,
  pricing: `/pricing`,
  privacyPolicy: `/privacy-policy`,
  projects: `/projects`,
  events: `/events`,
  project: `/project`,
  projectArticle: '/project/article/${slug}',
  profile: PROFILE,
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
      applyCoupon: `${API}/cart/apply-coupon`,
    },
    order: {
      createOrder: `${API}/order/create-order`,
      addItem: `${API}/order/add-item`,
    },
    user: {
      initSubscription: `${API}/user/init-subscription`,
    },
    article: {
      createUpdate: `${API}/article/create-update`,
      like: `${API}/article/like`,
      view: `${API}/article/view`,
    },
    project: {
      transparency: {
        rate: `${API}/project/transparency/rate`,
        recalculate: `${API}/project/transparency/recalculate`,
      },
      create: `${API}/project/create`,
    },
    votes: {
      getVotes: `${API}/votes/get-votes`,
      vote: `${API}/votes/vote`,
      secureVote: `${API}/votes/secure-vote`,
      voteCheck: `${API}/votes/vote-check`,
    },
    comments: {
      like: `${API}/comments/like`,
      report: `${API}/comments/report`,
      remove: `${API}/comments/remove`,
      post: `${API}/comments/post`,
    },
    image: {
      resize: `${API}/image/resize`,
    },
    email: {
      submit: `${API}/email/submit`,
    },
    products: {
      quiz: {
        createUpdate: `${API}/products/quiz/create-update`,
        like: `${API}/products/quiz/like`,
        view: `${API}/products/quiz/view`,
        addWinner: `${API}/products/quiz/add-winner`,
      },
    },
  },
  external: {
    discord: {
      check: `${DISCORD_API}/check`,
      reloadConfig: `${DISCORD_API}/reload-config`,
      getChannels: `${DISCORD_API}/get-channels/${'${guildId}'}`,
      getGuild: `${DISCORD_API}/get-guild/${'${guildId}'}`,
      addAllScheduledEvents: `${DISCORD_API}/add-all-scheduled-events/${'${guildId}'}`,
    },
  },
};

export default routes;

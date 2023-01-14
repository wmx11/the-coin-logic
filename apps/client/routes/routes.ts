import { isDev } from 'utils/utils';

const TEXT_CONTENT = '/text-content';
const PROFILE = '/profile';
const MARKETING_TRACKER = `${PROFILE}/marketing-tracker`;
const API = isDev ? 'http://localhost:3000/api' : 'https://thecoinlogic.com/api';
const DISCORD_API = process.env.NEXT_PUBLIC_DISCORD_API;

const routes = {
  base: isDev ? 'http://localhost:3000' : 'https://thecoinlogic.com',
  authCheck: '/auth-check',
  aboutUs: `/about-us`,
  articles: `/articles`,
  articleCreate: `/articles/create`,
  articleUpdate: '/articles/update/${slug}',
  quiz: '/products/quiz/${slug}',
  quizzes: '/products/quiz',
  quizCreate: `/products/quiz/create`,
  quizUpdate: '/products/quiz/update/${slug}',
  transcription: '/products/transcription/slug/${slug}',
  transcriptionId: '/products/transcription/${slug}',
  transcriptions: '/products/transcription',
  transcriptionCreate: `/products/transcription/create`,
  transcriptionUpdate: '/products/transcription/update/${slug}',
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
  nexus: '/nexus',
  nexusBySlug: '/nexus/${slug}',
  project: `/project`,
  projectArticle: '/project/article/${slug}',
  profile: PROFILE,
  addProject: `${PROFILE}/add-project`,
  myProjects: `${PROFILE}/my-projects`,
  funding: `${PROFILE}/funding`,
  applyForNexus: `${PROFILE}/apply-for-nexus`,
  myNexus: `${PROFILE}/my-nexus`,
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
    data: {
      market: `${API}/data/market`,
      social: `${API}/data/social`,
      table: `${API}/data/table`,
    },
    controls: {
      like: `${API}/controls/like`,
      view: `${API}/controls/view`,
      follow: `${API}/controls/follow`,
    },
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
      emailSubscribe: `${API}/user/email-subscribe`,
      verifyEmail: `${API}/user/verify-email`,
      resendVerification: `${API}/user/resend-verify`,
      register: `${API}/user/register`,
    },
    article: {
      createUpdate: `${API}/article/create-update`,
    },
    nexus: {
      createUpdate: `${API}/nexus/create-update`,
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
      getRatings: `${API}/votes/get-ratings`,
      vote: `${API}/votes/vote`,
      secureVote: `${API}/votes/secure-vote`,
      secureRate: `${API}/votes/secure-rate`,
      voteCheck: `${API}/votes/vote-check`,
    },
    comments: {
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
        addWinner: `${API}/products/quiz/add-winner`,
      },
    },
    transcribe: {
      youtube: `${API}/transcriptions/youtube`,
      upload: `${API}/transcriptions/upload`,
      check: `${API}/transcriptions/check`,
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

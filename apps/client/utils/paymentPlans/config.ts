export type PaymentPlansConfig = {
  enabled: boolean;
  isListed: boolean;
  trackPrice: boolean;
  trackMarketCap: boolean;
  displayBlogPosts: boolean;
  displayTransparencyScore: boolean;
  displayCommunityVotes: boolean;
  displayCommunityComments: boolean;
  trackSocials: boolean;
  trackHolders: boolean;
  trackData: boolean;
  marketingTrackerDuration: number;
};

export const paymentPlans = {
  copper: {
    config: {
      enabled: true,
      isListed: true,
      trackPrice: true,
      trackMarketCap: true,
      displayBlogPosts: false,
      displayTransparencyScore: false,
      displayCommunityVotes: false,
      displayCommunityComments: false,
      trackSocials: false,
      trackHolders: false,
      trackData: false,
      marketingTrackerDuration: 0,
    },
    color: '#B87333',
  },
  silver: {
    config: {
      enabled: true,
      isListed: true,
      trackPrice: true,
      trackMarketCap: true,
      displayBlogPosts: false,
      displayTransparencyScore: true,
      displayCommunityVotes: true,
      displayCommunityComments: true,
      trackSocials: true,
      trackHolders: false,
      trackData: false,
      marketingTrackerDuration: 0,
    },
    color: '#c0c0c0 ',
  },
  gold: {
    config: {
      enabled: true,
      isListed: true,
      trackPrice: true,
      trackMarketCap: true,
      displayBlogPosts: true,
      displayTransparencyScore: true,
      displayCommunityVotes: true,
      displayCommunityComments: true,
      trackSocials: true,
      trackHolders: true,
      trackData: true,
      marketingTrackerDuration: 0,
    },
    color: '#FFD700',
    icon: '👑',
  },
  platinum: {
    config: {
      enabled: true,
      isListed: true,
      trackPrice: true,
      trackMarketCap: true,
      displayBlogPosts: true,
      displayTransparencyScore: true,
      displayCommunityVotes: true,
      displayCommunityComments: true,
      trackSocials: true,
      trackHolders: true,
      trackData: true,
      marketingTrackerDuration: 3,
    },
    color: '#E5E4E2',
    icon: '👑',
  },
  palladium: {
    config: {
      enabled: true,
      isListed: true,
      trackPrice: true,
      trackMarketCap: true,
      displayBlogPosts: true,
      displayTransparencyScore: true,
      displayCommunityVotes: true,
      displayCommunityComments: true,
      trackSocials: true,
      trackHolders: true,
      trackData: true,
      marketingTrackerDuration: 3,
    },
    color: '#CED0DD',
    icon: '👑',
  },
};

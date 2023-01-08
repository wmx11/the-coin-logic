const withBase = (selector: string) => `query($projectId: ID) {
  marketStats(where: { project: { id: { equals: $projectId } } }, orderBy: { dateAdded: asc }) {
    value: ${selector}
    date: dateAdded
    annotation
  }
  projects(where: { id: { equals: $projectId } }) {
    network {
      slug
    }
    pairAddress
  }
}`;

const withSocialsBase = (selector: string) => `query($projectId: ID) {
  socialStats(where: { project: { id: { equals: $projectId } } }, orderBy: { dateAdded: asc }) {
    value: ${selector}
    date: dateAdded
  }
}`;

export const GET_PRICE = withBase('price');
export const GET_MARKET_CAP = withBase('marketCap');
export const GET_TOTAL_SUPPLY = withBase('totalSupply');
export const GET_LIQUIDITY = withBase('liquidity');
export const GET_PAIR_PRICE = withBase('pairPrice');
export const GET_BURNED_TOKENS = withBase('burnedTokens');
export const GET_FDV = withBase('fdv');
export const GET_CUSTOM_TRACKERS = withBase('customTrackers');

export const GET_HOLDERS = withBase('holders');
export const GET_AVERAGE_HOLDINGS = withBase('avgHoldings');
export const GET_NEW_HOLDERS = withBase('newHolders');
export const GET_LEAVING_HOLDERS = withBase('leavingHolders');
export const GET_RECURRING_HOLDERS = withBase('recurringHolders');

export const GET_DISCORD_MEMBERS = withSocialsBase('discord');
export const GET_TELEGRAM_MEMBERS = withSocialsBase('telegram');
export const GET_TWITTER_FOLLOWERS = withSocialsBase('twitter');

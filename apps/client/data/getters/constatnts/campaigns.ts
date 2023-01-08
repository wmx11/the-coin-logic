export const GET_CAMPAIGN_BY_CAMPAIGN_ID = `
query($campaignId: String, $userId: ID) {
  marketingCampaigns(where: {
    campaignId: { equals: $campaignId }
    users: { some: { id: { equals: $userId } } }
  }) {
    id
    name
    campaignId
    enabled
    status
    isInternal
    trackMarket
    trackSocial
    startDate
    endDate
    budget
    description
    agency
    agencyUrl
    project {
      id
      name
      slug
      logo {
        url
      }
      liquidityPair {
        tokenAddress
        exchange {
          tradeUrl
        }
      }
      website
      whitepaper
      twitter
      telegram
      discord
      reddit
      youtube
      medium
    }
    marketStatSnapshot
    finalSnapshot
    marketBudget
    socialBudget
    priceGoal
    marketCapGoal
    volumeGoal
    holdersGoal
    twitterGoal
    discordGoal
    telegramGoal
    dateAdded
    updatedAt
  }
}`;

export const GET_CAMPAIGN_RESULTS_BY_CAMPAIGN_ID = `
query($campaignId: String) {
  marketingTrackerResults(
    orderBy: { dateAdded: desc }
    take: 1
    where: { marketingCampaign: { campaignId: { equals: $campaignId } } }
  ) {
    referer
    ipAddress
    userAgent
    timezone
    city
    country
    target
    uniqueClicks(campaignId: $campaignId)
    totalClicks(campaignId: $campaignId)
    socialClicks(campaignId: $campaignId)
    countryResults(campaignId: $campaignId)
    deviceResults(campaignId: $campaignId)
    refererResults(campaignId: $campaignId)
    marketingCampaign {
      campaignId
    }
    dateAdded
    updatedAt
  }
}`;

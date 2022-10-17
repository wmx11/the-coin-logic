export const GET_CAMPAIGN_BY_CAMPAIGN_ID = `
query($campaignId: String) {
  marketingCampaigns(where: { campaignId: { equals: $campaignId } }) {
    id
    name
    campaignId
    status
    enabled
    isInternal
    startDate
    endDate
    budget
    description
    agency
    agencyUrl
    creator {
      name
      slug
      enabled
    }
    project {
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

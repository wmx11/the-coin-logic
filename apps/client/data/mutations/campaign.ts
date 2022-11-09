import { gql } from '@apollo/client';

export const CREATE_CAMPAIGN = gql`
  mutation CreateCampaign(
    $name: String
    $project: ID
    $enabled: Boolean
    $budget: Float
    $user: String
    $isInternal: Boolean
    $trackMarket: Boolean
    $trackSocial: Boolean
    $startDate: CalendarDay
    $endDate: CalendarDay
    $description: String
    $notes: String
    $agency: String
    $agencyUrl: String
    $marketBudget: Float
    $socialBudget: Float
    $marketStatSnapshot: JSON
    $priceGoal: Float
    $marketCapGoal: Float
    $volumeGoal: Float
    $holdersGoal: Float
    $twitterGoal: Float
    $discordGoal: Float
    $telegramGoal: Float
  ) {
    createMarketingCampaign(
      data: {
        name: $name
        users: { connect: { email: $user } }
        project: { connect: { id: $project } }
        budget: $budget
        enabled: $enabled
        isInternal: $isInternal
        trackMarket: $trackMarket
        trackSocial: $trackSocial
        startDate: $startDate
        endDate: $endDate
        description: $description
        notes: $notes
        agency: $agency
        agencyUrl: $agencyUrl
        marketBudget: $marketBudget
        socialBudget: $socialBudget
        marketStatSnapshot: $marketStatSnapshot
        priceGoal: $priceGoal
        marketCapGoal: $marketCapGoal
        volumeGoal: $volumeGoal
        holdersGoal: $holdersGoal
        twitterGoal: $twitterGoal
        discordGoal: $discordGoal
        telegramGoal: $telegramGoal
      }
    ) {
      campaignId
    }
  }
`;

export const UPDATE_CAMPAIGN = gql`
  mutation CreateCampaign(
    $id: ID
    $name: String
    $project: ID
    $enabled: Boolean
    $budget: Float
    $user: String
    $isInternal: Boolean
    $trackMarket: Boolean
    $trackSocial: Boolean
    $startDate: CalendarDay
    $endDate: CalendarDay
    $description: String
    $notes: String
    $agency: String
    $agencyUrl: String
    $marketBudget: Float
    $socialBudget: Float
    $marketStatSnapshot: JSON
    $priceGoal: Float
    $marketCapGoal: Float
    $volumeGoal: Float
    $holdersGoal: Float
    $twitterGoal: Float
    $discordGoal: Float
    $telegramGoal: Float
  ) {
    updateMarketingCampaign(
      where: { id: $id }
      data: {
        name: $name
        users: { connect: { email: $user } }
        project: { connect: { id: $project } }
        budget: $budget
        enabled: $enabled
        isInternal: $isInternal
        trackMarket: $trackMarket
        trackSocial: $trackSocial
        startDate: $startDate
        endDate: $endDate
        description: $description
        notes: $notes
        agency: $agency
        agencyUrl: $agencyUrl
        marketBudget: $marketBudget
        socialBudget: $socialBudget
        marketStatSnapshot: $marketStatSnapshot
        priceGoal: $priceGoal
        marketCapGoal: $marketCapGoal
        volumeGoal: $volumeGoal
        holdersGoal: $holdersGoal
        twitterGoal: $twitterGoal
        discordGoal: $discordGoal
        telegramGoal: $telegramGoal
      }
    ) {
      campaignId
    }
  }
`;

export const DELETE_CAMPAIGN = gql`
  mutation DeleteCampaign($id: ID) {
    deleteMarketingCampaign(where: { id: $id }) {
      id
    }
  }
`;

export const UPDATE_CAMPAIGN_STATUS = gql`
  mutation UpdateCampaignStatus($id: ID, $status: String) {
    updateMarketingCampaign(where: { id: $id }, data: { status: $status }) {
      id
    }
  }
`;

export const SET_FINAL_CAMPAIGN_SNAPSHOT = gql`
  mutation SetFinalCampaignSnapshot($id: ID, $finalSnapshot: JSON) {
    updateMarketingCampaign(where: { id: $id }, data: { finalSnapshot: $finalSnapshot }) {
      id
    }
  }
`;

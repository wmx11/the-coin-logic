export const GET_USER_BY_ID = `
query($id: ID) {
  user(where: { id: $id }) {
    firstName
    lastName
    name
    email
    isVerified
    isSubscribedToEmail
    isNotChargeable
    isAdmin
    walletAddress
    projectsCount
    ip
    subscriptionStatus(userId: $id) {
      isValid
      products
      dateFrom
      dateTo
    }
    referralCode
    dateCreated
  }
  ordersCount(
    where: {
      user: { id: { equals: $id } }
    }
  )
}`;

export const GET_USER_REFERALS = `
query($referralCode: String) {
  referredUsers: usersCount(where: { referrer: { equals: $referralCode } })
  onboardedProjects: projectsCount(
    where: { user: { some: { referrer: { equals: $referralCode } } } }
  )
}`;

export const GET_USER_MARKETING_CAMPAIGNS = `
query($email: String) {
  user(where: { email: $email }) {
    marketingCampaigns {
      id
      name
      campaignId
      enabled
      status
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
  }
}`;

export const GET_USER_PROJECTS = `
query($email: String!) {
  user(where: { email: $email }) {
    projects {
      id
      name
      slug
    }
    managedProjects {
      id
      name
      slug
    }
  }
}`;

const QUIZ_SELECTOR = `
id
title
slug
image {
  url
}
user {
  id
}
totalWinners
winners
hasRewards
rewardsAmount
rewardType
views
likesCount
startDate
endDate
dateAdded
enabled
`;

export const GET_PRODUCT_BY_SKU = `
query($sku: String) {
  products(where: { sku: { equals: $sku } }) {
    id
    name
    sku
    slug
    isForListed
    isForUnlisted
    isOneTime
    isMonthly
    price
    description
  }
}
`;

export const GET_PRODUCTS = `
query {
  products(where: { enabled: { equals: true } }) {
    id
    name
    slug
    sku
    isForListed
    isForUnlisted
    isOneTime
    isMonthly
    label
    priceLabel
    price
    description
    offers
    styles
  }
  paymentPlans(orderBy: { price: asc }) {
    id
    name
    tooltip
    price
    description
  }
}
`;

export const GET_QUIZZES = `query($take: Int, $skip: Int) {
  quizzes(take: $take, skip: $skip, orderBy: { dateAdded: desc }) {
    ${QUIZ_SELECTOR}
  }
  quizzesCount
}`;

export const GET_QUIZZES_BY_PROJECT_SLUG = `query($slug: String, $take: Int, $skip: Int) {
  quizzes(take: $take, skip: $skip, orderBy: { dateAdded: desc }, where: { project: { slug: { equals: $slug } } }) {
    ${QUIZ_SELECTOR}
  }
  quizzesCount(where: { project: { slug: { equals: $slug } } })
}`;

export const GET_QUIZ_BY_SLUG = `query($slug: String) {
  quizzes(where: { slug: {equals: $slug} } ) {
    ${QUIZ_SELECTOR}
    description
    onWinDescription
    onEndDescription
    config
    timePerQuestion
    startDate
    endDate
    project {
      id
      name
      slug
      logo {
        url
      }
    }
  }
}`;

export const GET_QUIZ_BY_QUIZ_ID = `query($id: ID) {
  quiz(where: { id: $id } ) {
    ${QUIZ_SELECTOR}
    description
    onWinDescription
    onEndDescription
    config
    timePerQuestion
    startDate
    endDate
    project {
      id
      name
      slug
      logo {
        url
      }
    }
  }
}`;

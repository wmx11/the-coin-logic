const GETTER = `
id
name
nickname
enabled
isListed
slug
summary
tags {
  name
}
image {
  url
}
backgroundImage {
  url
}
isPromoted
openForWork
displayPrices
priceFrom
priceTo
views
followersCount
commentsCount
votesCount(where: { type: { equals: "rating" } })
dateAdded
`;

export const GET_PROVIDERS = `
{
  providers(
    where: { enabled: { equals: true }, isListed: { equals: true } }
    orderBy: { views: desc }
  ) {
    ${GETTER}
  }
}`;

export const GET_PROVIDER_BY_SLUG = `
query($slug: String, $userId: ID) {
  providers(where: { slug: { equals: $slug } }) {
    id
    name
    nickname
    slug
    summary
    enabled
    isListed
    tags {
      id
      name
    }
    image {
      url
    }
    backgroundImage {
      url
    }
    contactEmail
    displayEmail
    about
    offers
    website
    twitter
    telegram
    discord
    reddit
    youtube
    isPromoted
    openForWork
    displayPrices
    priceFrom
    priceTo
    views
    user {
      id
    }
    followersCount
    followers(where: { id: { equals: $userId }}) {
      id
    }
    commentsCount
    votesCount(where: { type: { equals: "rating" } })
    dateAdded
  }
}`;

export const GET_PROVIDER_BY_ID_FOR_USER = `
query($id: ID) {
  provider(where: { id: $id }) {
    ${GETTER}
  }
}`;

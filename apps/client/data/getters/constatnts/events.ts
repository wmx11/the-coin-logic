const EVENTS_SELECTOR = `
id
guildName
channelName
name
description
inviteUrl
scheduledStartTimestamp
scheduledEndTimestamp
location
image
project {
  name
  slug
  logo {
    url
  }
}
`;

export const GET_EVENTS = `
query ($take: Int, $skip: Int, $date: DateTime) {
  discordEvents(take: $take, skip: $skip, orderBy: { scheduledStartTimestamp: asc }, where: { scheduledStartTimestamp: { gt: $date } }) {
    ${EVENTS_SELECTOR}
  }
  discordEventsCount(where: { scheduledStartTimestamp: { gt: $date } })
}`;

export const GET_EVENTS_BY_SLUG = `
query ($take: Int, $skip: Int, $slug: String, $date: DateTime) {
  discordEvents(take: $take, skip: $skip, orderBy: { scheduledStartTimestamp: asc }, where: { scheduledStartTimestamp: { gt: $date }, project: { slug: { equals: $slug } } } ) {
    ${EVENTS_SELECTOR}
  }
  discordEventsCount(where: { scheduledStartTimestamp: { gt: $date }, project: { slug: { equals: $slug } } } )
}`;

export const GET_EVENT_BY_ID = `
query ($id: ID) {
  discordEvent(where: {id: $id}) {
    ${EVENTS_SELECTOR}
  }
}`;

export const GET_EVENTS_HIGHLIGHTS = `
query ($date: DateTime) {
  discordEvents(orderBy: { scheduledStartTimestamp: asc }, where: { scheduledStartTimestamp: { gt: $date } }, take: 3 ) {
    ${EVENTS_SELECTOR}
  }
}`;

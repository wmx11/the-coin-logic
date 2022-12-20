const ANNOUNCEMENTS_SELECTOR = `
id
title
content
messageUrl
dateAdded
updatedAt
project {
  name
  slug
  logo {
    url
  }
}`;

export const GET_ANNOUNCEMENTS = `
query($take: Int, $skip: Int){
  discordAnnouncements(take: $take, skip: $skip, orderBy: { dateAdded: desc }) {
    ${ANNOUNCEMENTS_SELECTOR}
  }
  discordAnnouncementsCount
}`;

export const GET_ANNOUNCEMENTS_BY_SLUG = `
query($slug: String, $take: Int, $skip: Int) {
  discordAnnouncements(take: $take, skip: $skip, orderBy: { dateAdded: desc }, where: { project: { slug: { equals: $slug } } }) {
    ${ANNOUNCEMENTS_SELECTOR}
  }
  discordAnnouncementsCount(where: { project: { slug: { equals: $slug } } })
}`;

export const GET_ANNOUNCEMENT_BY_ID = `
query($id: ID) {
  discordAnnouncement(where: {id: $id}) {
    ${ANNOUNCEMENTS_SELECTOR}
  }
}`;

export const GET_ANNOUNCEMENTS_HIGHLIGHTS = `
{
  discordAnnouncements(orderBy: { dateAdded: desc }, take: 3) {
    ${ANNOUNCEMENTS_SELECTOR}
  }
}`;

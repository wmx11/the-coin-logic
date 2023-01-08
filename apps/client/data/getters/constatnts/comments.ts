export const GET_PROJECT_COMMENTS_BY_ID = `
query($id: ID, $take: Int, $skip: Int) {
  comments(where: { project: { id: { equals: $id } } }, orderBy: { dateAdded: desc }, take: $take, skip: $skip) {
    id
    content
    sentiment
    likesCount
    reportsCount
    dateAdded
    user {
      name
    }
  }
  commentsCount(where: { project: { id: { equals: $id } } })
}`;

export const GET_PROVIDER_COMMENTS_BY_ID = `
query($id: ID, $take: Int, $skip: Int) {
  comments(where: { provider: { id: { equals: $id } } }, orderBy: { dateAdded: desc }, take: $take, skip: $skip) {
    id
    content
    sentiment
    likesCount
    reportsCount
    dateAdded
    user {
      name
    }
  }
  commentsCount(where: { provider: { id: { equals: $id } } })
}`;

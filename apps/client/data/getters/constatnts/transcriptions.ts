export const GET_TRANSCRIPTION_BY_SLUG = `
query($slug: String) {
  transcriptions(where: { slug: { equals: $slug } }) {
    id
    title
    slug
    content
    contentUrl
    project {
      name
      slug
      logo {
        url
      }
    }
    user {
      name
    }
    likesCount
    views
    dateAdded
  }
}`;

export const GET_TRANSCRIPTIONS = `
query($take: Int, $skip: Int){
  transcriptions(take: $take, skip: $skip, orderBy: { dateAdded: desc }) {
    id
    title
    slug
    summary
    contentUrl
    project {
      name
      slug
      logo {
        url
      }
    }
    user {
      name
    }
    likesCount
    views
    dateAdded
  }
  transcriptionsCount
}`;

export const GET_TRANSCRIPTIONS_BY_PROJECT_SLUG = `
query($take: Int, $skip: Int, $slug: String){
  transcriptions(take: $take, skip: $skip, orderBy: { dateAdded: desc }, where: { project: {slug: {equals: $slug }}}) {
    id
    title
    slug
    summary
    contentUrl
    project {
      name
      slug
      logo {
        url
      }
    }
    user {
      name
    }
    likesCount
    views
    dateAdded
  }
  transcriptionsCount
}`;

const BLOG_POST_SELECTOR = `   
id 
title
slug
summary
views
likesCount
image {
  url
}
contentType {
  title
}
richContent
content {
  document
}
project {
  name
  slug
  logo {
    url
  }
}
user {
  id
  name
}
dateAdded`;

export const GET_CONTENT_BY_SLUG = `
query($slug: String) {
  contents(where: { slug: { equals: $slug }, enabled: { equals: true } }) {
    ${BLOG_POST_SELECTOR}
  }
}
`;

export const GET_TEXT_CONTENT_BY_SLUG = `
query($slug: String) {
  contents(where: { slug: { equals: $slug }, enabled: { equals: true }, contentType: { typeName: { equals: "text-content" } } }) {
    ${BLOG_POST_SELECTOR}
  }
}
`;

export const GET_CONTENT_BY_BLOCK = `
query($block: String) {
  contents(
    where: {
      blockName: { blockName: { equals: $block } }
      enabled: { equals: true }
    }
  ) {
    ${BLOG_POST_SELECTOR}
  }
}
`;

export const GET_BLOG_CONTENT_BY_SLUG = `
query($slug: String) {
  contents(
    where: {
      slug: { equals: $slug }
      blockName: { blockName: { equals: "blog" } }
    }
  ) {
    ${BLOG_POST_SELECTOR}
  }
}`;

export const GET_BLOG_POSTS = `
query($take: Int, $skip: Int){
  contents(
    where: {
      blockName: { blockName: { equals: "blog" }, enabled: { equals: true } }
    },
    take: $take
    skip: $skip
    orderBy: { dateAdded: desc }
  ) {
    ${BLOG_POST_SELECTOR}
  }
  contentsCount(where: {
    blockName: { blockName: { equals: "blog" }, enabled: { equals: true } }
  })
}`;

export const GET_BLOG_POSTS_BY_PROJECT_SLUG = `
query($slug: String, $take: Int, $skip: Int){
  contents(
    where: {
      blockName: { blockName: { equals: "blog" }, enabled: { equals: true } }
      project: { slug: { equals: $slug } }
    },
    take: $take
    skip: $skip
    orderBy: { dateAdded: desc }
  ) {
    ${BLOG_POST_SELECTOR}
  }
  contentsCount(where: {
    blockName: { blockName: { equals: "blog" }, enabled: { equals: true } }
    project: { slug: { equals: $slug } }
  })
}`;

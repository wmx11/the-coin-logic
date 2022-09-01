export const GET_CONTENT_BY_SLUG = `
query($slug: String) {
  contents(where: { slug: { equals: $slug }, enabled: { equals: true } }) {
    title
    slug
    contentType {
      title
    }
    content {
      document
    }
  }
}
`;

export const GET_TEXT_CONTENT_BY_SLUG = `
query($slug: String) {
  contents(where: { slug: { equals: $slug }, enabled: { equals: true }, contentType: { typeName: { equals: "text-content" } } }) {
    title
    slug
    contentType {
      title
    }
    content {
      document
    }
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
    title
    slug
    contentType {
      title
    }
    content {
      document
    }
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
    title
    slug
    dateAdded
    summary
    contentType {
      title
    }
    image {
      url
    }
    content {
      document
    }
  }
}`;

export const GET_BLOG_POSTS = `
query($take: Int){
  contents(
    where: {
      blockName: { blockName: { equals: "blog" }, enabled: { equals: true } }
    },
    take: $take
    orderBy: { dateAdded: desc }
  ) {
    title
    slug
    summary
    contentType {
      title
    }
    image {
      url
    }
    dateAdded
  }
}`;

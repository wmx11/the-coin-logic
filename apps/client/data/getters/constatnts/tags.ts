export const GET_PERSON_TAGS = `
{
  tags(where: { type: { equals: "person" }}) {
    id
    name
  }
}`

export const GET_PROJECT_TAGS = `
{
  tags(where: { type: { equals: "project" }}) {
    id
    name
  }
}`
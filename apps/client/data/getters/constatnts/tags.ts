export const GET_PERSON_TAGS = `
{
  tags(where: { type: { equals: "person" }}) {
    id
    name
  }
}
`
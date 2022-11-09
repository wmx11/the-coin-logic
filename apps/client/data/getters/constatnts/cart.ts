export const GET_CARTS = `
  query($userId: ID) {
    carts(where: { user: { id: { equals: $userId } } }) {
      id
      cartItemCount
      cartItem {
        id
        price
        discount
        tax
        quantity
        product {
          name
          slug
          price
          description
        }
      }
    }
  }
`;

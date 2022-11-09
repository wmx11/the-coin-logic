import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation ($userId: ID) {
    createCart(data: { user: { connect: { id: $userId } } }) {
      id
    }
  }
`;

export const DELETE_ORDER = gql`
  mutation ($cartId: ID) {
    deleteCart(where: { id: $cartId }) {
      id
    }
  }
`;

export const ADD_ORDER_ITEM = gql`
  mutation ($productId: ID, $cartId: ID, $price: Float, $discount: Float, $quantity: Float) {
    createCartItem(
      data: {
        product: { connect: { id: $productId } }
        cart: { connect: { id: $cartId } }
        price: $price
        discount: $discount
        quantity: $quantity
      }
    ) {
      id
    }
  }
`;

export const REMOVE_ORDER_ITEM = gql``;

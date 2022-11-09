import { gql } from '@apollo/client';

export const CREATE_CART = gql`
  mutation ($userId: ID) {
    createCart(data: { user: { connect: { id: $userId } } }) {
      id
    }
  }
`;

export const DELETE_CART = gql`
  mutation ($cartId: ID) {
    deleteCart(where: { id: $cartId }) {
      id
    }
  }
`;

export const ADD_CART_ITEM = gql`
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

export const UPDATE_CART_ITEM = gql`
  mutation ($cartItemId: ID, $price: Float, $discount: Float, $quantity: Float) {
    updateCartItem(where: { id: $cartItemId }, data: { price: $price, discount: $discount, quantity: $quantity }) {
      id
    }
  }
`;

export const REMOVE_CART_ITEM = gql`
  mutation ($cartItemId: ID) {
    deleteCartItem(where: { id: $cartItemId }) {
      id
    }
  }
`;

import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String
    $email: String
    $password: String
    $referral: String
    $isSubscribedToEmail: Boolean
  ) {
    createUser(
      data: {
        name: $name
        email: $email
        password: $password
        referral: $referral
        isSubscribedToEmail: $isSubscribedToEmail
      }
    ) {
      name
      referral
      email
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          name
          email
          isSubscribedToEmail
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

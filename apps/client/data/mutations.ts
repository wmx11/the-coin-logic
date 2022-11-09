import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String
    $email: String
    $password: String
    $referrer: String
    $isSubscribedToEmail: Boolean
    $ip: String
  ) {
    createUser(
      data: {
        name: $name
        email: $email
        password: $password
        referrer: $referrer
        isSubscribedToEmail: $isSubscribedToEmail
        ip: $ip
      }
    ) {
      name
      referrer
      email
    }
  }
`;

export const UPDATE_USER_BY_EMAIL = gql`
  mutation UpdateUser(
    $email: String
    $firstName: String
    $lastName: String
    $isSubscribedToEmail: Boolean
    $walletAddress: String
  ) {
    updateUser(
      where: { email: $email }
      data: {
        firstName: $firstName
        lastName: $lastName
        isSubscribedToEmail: $isSubscribedToEmail
        walletAddress: $walletAddress
      }
    ) {
      name
      email
      firstName
      lastName
      isSubscribedToEmail
      walletAddress
    }
  }
`;

// Sends a password reset link email to the given email address.
export const REQUEST_PASSWORD_RESET = gql`
  mutation ($email: String!) {
    sendUserPasswordResetLink(email: $email)
  }
`;

// Resets a password for the user. REQUEST_PASSWORD_RESET must be used first.
export const RESET_PASSWORD_WITH_TOKEN = gql`
  mutation ($email: String!, $token: String!, $password: String!) {
    redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
      code
      message
    }
  }
`;

// Deletes a user by the given email address
export const DELETE_USER = gql`
  mutation ($email: String!) {
    deleteUser(where: { email: $email }) {
      name
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          email
          isVerified
          isSubscribedToEmail
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

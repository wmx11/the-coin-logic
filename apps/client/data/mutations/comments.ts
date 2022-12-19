import { gql } from '@apollo/client';

export const ADD_PROJECT_COMMENT_LIKE = gql`
  mutation ($id: ID, $likes: Int) {
    updateComment(where: { id: $id }, data: { likes: $likes }) {
      id
      likes
    }
  }
`;

export const REPORT_PROJECT_COMMENT = gql`
  mutation ($id: ID, $reports: Int) {
    updateComment(where: { id: $id }, data: { reports: $reports }) {
      id
      reports
    }
  }
`;

export const DELETE_PROJECT_COMMENT = gql`
  mutation ($id: ID) {
    deleteComment(where: { id: $id }) {
      id
    }
  }
`;

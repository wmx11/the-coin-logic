import { gql } from '@apollo/client';

export const ADD_RPOJECT = gql`
  mutation (
    $name: String
    $contractAddress: String
    $network: ID
    $pairAddress: String
    $description: String
    $kycLink: String
    $auditLink: String
    $website: String
    $whitepaper: String
    $twitter: String
    $telegram: String
    $discord: String
    $reddit: String
    $youtube: String
    $medium: String
    $user: ID
  ) {
    createProject(
      data: {
        name: $name
        contractAddress: $contractAddress
        network: { connect: { id: $network } }
        user: { connect: { id: $user } }
        pairAddress: $pairAddress
        description: $description
        kycLink: $kycLink
        auditLink: $auditLink
        website: $website
        whitepaper: $whitepaper
        twitter: $twitter
        telegram: $telegram
        discord: $discord
        reddit: $reddit
        youtube: $youtube
        medium: $medium
        isPending: true
      }
    ) {
      name
    }
  }
`;

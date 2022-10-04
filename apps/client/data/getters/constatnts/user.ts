export const GET_USER_BY_ID = `
query($id: ID) {
  user(where: { id: $id }) {
    firstName
    lastName
    name
    email
    isVerified
    isSubscribedToEmail
    walletAddress
    projectsCount
    subscribedTill
    referralCode
    dateCreated
  }
}`;

export const GET_USER_REFERALS = `
query($referralCode: String) {
  referredUsers: usersCount(where: { referrer: { equals: $referralCode } })
  onboardedProjects: projectsCount(
    where: { user: { some: { referrer: { equals: $referralCode } } } }
  )
}`;

export const GET_USER_PAYMENTS = `
query($email: String) {
  user(where: { email: $email }) {
    payments(orderBy: { dateIssued: desc }) {
      name
      description
      quantity
      price
      discount
      tax
      amount
      paymentMethod
      paymentAddress
      status
      invoiceUrl
      dateIssued
      datePaid
    }
  }
}`;

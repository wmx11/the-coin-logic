export const GET_PRODUCT_BY_SKU = `
query($sku: String) {
  products(where: { sku: { equals: $sku } }) {
    id
    name
    sku
    slug
    isForListed
    isForUnlisted
    isOneTime
    isMonthly
    price
    description
  }
}
`;

export const GET_PRODUCTS = `
query {
  products(where: { enabled: { equals: true } }) {
    id
    name
    slug
    sku
    isForListed
    isForUnlisted
    isOneTime
    isMonthly
    label
    priceLabel
    price
    description
    offers
    styles
  }
}
`;

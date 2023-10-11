import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
      _id
      email
      password
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query product {
    product {
      _id
      product_name
      price
      stock
    }
  }
`;

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

export const QUERY_PRODUCTS = gql`
  query products {
    products {
      _id
      product_name
      price
      stock
    }
  }
`;

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
    productName
    productDescription
    price
  }
}
`;
export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
    password
    orderCount
    savedOrders {
      _id
      orderDate
      orderShipped
      products {
        _id
        price
        productDescription
        productName
      }
    }
  }
}

`
import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($productdId: ID!, $orderdId: ID!) {
    addProduct(productdId: $productdId, orderdId: $orderdId) {
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
`;

export const ADD_ORDER = gql`
  mutation createOrder(
    $email: String!
    $orderDate: String!
    $orderShipped: Boolean!
  ) {
    addOrder(
      email: $email
      orderDate: $orderDate
      orderShipped: $orderShipped
    ) {
      _id
      orderDate
      orderShipped
      products {
        _id
      }
    }
  }
`;

export const REMOVE_ORDER = gql`
  mutation removeOrder($orderId: ID!) {
    removeOrder(orderId: $orderId) {
      _id
    }
  }
`;

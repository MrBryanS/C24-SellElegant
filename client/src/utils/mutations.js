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

export const ADD_ORDER = gql`
  mutation Mutation(
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

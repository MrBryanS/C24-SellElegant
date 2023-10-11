import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password)  
    
    { token
    user {
      _id 
      email
      password
    }
  }
  }
`;

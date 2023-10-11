const typeDefs = `#graphql 
#This is a GraphQL schema for the application

  type User {
    email: String!
    password: String!
  }

  type Product {
    product_name: String!
    price: Float!
    stock: Int!
  }

  # type Auth
  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    user: [User]
    product: [Product]
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

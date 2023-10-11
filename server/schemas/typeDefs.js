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

  # defined queries, mutations --cannot think of any mutations? -joelg
  
  type Query {
    user: [User]
    product: [Product]
  }

  type Mutation {
    createUser(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;

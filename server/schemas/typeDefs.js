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
    users: [User]
    user(email: String!): User
    products: [Product]
    product(productId: ID!): Product
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

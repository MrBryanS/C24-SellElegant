const typeDefs = `#graphql 
#This is a GraphQL schema for the application

  type User {
    _id: ID!
    username: String
    email: String
    password: String!
    orderCount: Int #like bookCount from c21
    savedOrders: [ Order ]  #like savedBooks from c21   
    
  }

  type Product {
    _id: ID!
    product_name: String!
    productDescription: String!
    price: Float    
  }

#Order is the list of orders in the database - like book type in c21 (books saved by the user)
  type Order {
    _id: ID!
    products: [ Product ] #like authors from c21
    orderDate: String!
    orderShipped: Bollean!  #true is shipped, false is pending
    
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

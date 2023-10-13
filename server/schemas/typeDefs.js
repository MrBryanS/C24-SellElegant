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
    productName: String!
    productDescription: String!
    price: Float    
  }

#Order is the list of orders in the database - like book type in c21 (books saved by the user)
  type Order {
    _id: ID!
    orderDate: String!
    orderShipped: Bollean!  #true is shipped, false is pending
    products: [ Product ] #like authors from c21
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
    createUser(username: String, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(orderDate: String!, orderShipped: Boolean!): Order
    removeOrder(orderId: ID!): Order
    addProduct(  #addComment is like adding productd to an order
      productdId: ID!
      productName: String!
      productDescription: String!
      price: Float!
      ): Order
    removeProduct(productId: ID!): Order

  }

`;

module.exports = typeDefs;

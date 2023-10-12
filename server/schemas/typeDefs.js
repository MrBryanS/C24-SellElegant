const typeDefs = `#graphql 
#This is a GraphQL schema for the application

  type User {
    _id: ID
    username: String
    email: String
    orderCount: Int #like bookCount from c21
    savedOrders: [Order] #like savedBooks from c21   
  }
#Product is the list of products in the database - like the google books api in c21 - this will be static and seeded in the database

  type Product {
    productId: String! #like bookId from c21
    productName: String! #like title from c21
    productDescription: String!
    productUnit: String! #one of the following: "each", "perM"
    productPrice: Float!       
  }

#Order is the list of orders in the database - like book type in c21 (books saved by the user)

  type Order {
    orderId: Int! #like bookId from c21
    products [ product_key ] #like authors from c21
    orderDate: String!
    orderStatus: String! #one of the following: "pending", "shipped"
}

  # type Auth
  type Auth {
    token: ID!
    user: User
  }
  #like user query from c21 line23 typeDefs.js
  type Query {
    me: [User]
    
  }

#createUser(email: String!, password: String!): Auth
#addOrder is like addUser from c21 line 28 typeDefs.js
#saveOrder is like saveBook from c21 line 29 typeDefs.js
 
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth #like addUser from c21 line 28 typeDefs.js
    saveOrder(orderId: Int!, products: [String], orderDate: String, orderStatus: String): User  ##like saveBook from c21 line 29 typeDefs.js
    removeOrder(orderId: Int!): User  ##like removeBook from c21 line 30 typeDefs.js
    
}

`;

module.exports = typeDefs;

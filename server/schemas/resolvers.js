const { User, Product, Order } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async () => {
      return User.findOne({ email });
    },
    products: async () => {
      return Product.find({});
    },
    product: async () => {
      return Product.findOne({ _id });
    },
    orders: async () => {
      return Order.find({});
    },
    order: async () => {
      return Order.findOne({ _id });
    }

  },
 
  Mutation: {
    createUser: async (parents, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    addOrder: async (parent, { orderDate, orderShipped }) => {
      const order = await Order.create({ orderDate, orderShipped });
      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { orders: order._id } }
      );
      return order;
    }

    
      
  },
};

module.exports = resolvers;

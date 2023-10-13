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
    },
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
    addOrder: async (parent, { email, orderDate, orderShipped }) => {
      const order = await Order.create({ orderDate, orderShipped });
      await User.findOneAndUpdate(
        { email: email },
        { $addToSet: { savedOrders: order._id } }
      );
      return order;
    },

    removeOrder: async (parent, { orderId }) => {
      return Order.findOneAndDelete({ _id: orderId });
    },

    addProduct: async (parent, { orderId, productId }) => {
      return Order.findOneAndUpdate(
        { _id: orderId },
        { $addToSet: { products: { productId } } },
        { new: true, runValidators: true }
      );
    },

    removeProduct: async (parent, { productId, orderId }) => {
      return Order.findOneAndUpdate(
        { _id: orderId },
        { $pull: { products: { _id: productId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;

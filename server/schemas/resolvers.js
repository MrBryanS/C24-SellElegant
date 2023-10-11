const { User, Product } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    product: async () => {
      return Product.find({});
    },
  },
  Mutation: {
    createUser: async (parents, {email, password}) => {
      const user = await User.create({email, password});
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;

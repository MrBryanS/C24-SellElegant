const { User, Product } = require("../models");

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    product: async () => {
      return Product.find();
    },
  },
  Mutation: {
    createUser: async (parents, args) => {
      const user = await User.create(args);
      return user;
    },
  },
};

module.exports = resolvers;

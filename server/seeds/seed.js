// C:\Users\bryan\bootcamp\challenges\C24-SellElegant\server\seeds\seed.js
const db = require("../config/connection");
// const { Product, User, Order } = require("../models");
const { User } = require("../models");
const cleanDB = require("./cleanDB");



db.once("open", async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
1
  await User.collection.insertOne({
    email: "test@gmail.com",
    password: "123",
  });
  await Product.collection.insertOne({
    product_name: "Love Letter",
    price: 5,
    stock: 100,
  });
  await Product.collection.insertOne({
    product_name: "Business Letter",
    price: 8,
    stock: 200,
  });

  process.exit(0);
});


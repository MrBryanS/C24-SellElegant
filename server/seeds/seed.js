const db = require("../config/connection");
const { User } = require("../models");
const cleanDB = require("./cleanDB");


const userData = require("./userData.json");


db.once("open", async () => {
  await cleanDB("User", "user");

  const users = await User.insertMany(userData);
  console.log("users seeded");

  process.exit(0);
});


  // await User.collection.insertOne({
  //   email: "test@gmail.com",
  //   password: "123",
  // });
  // await Product.collection.insertOne({
  //   product_name: "Love Letter",
  //   price: 5,
  //   stock: 100,
  // });
  // await Product.collection.insertOne({
  //   product_name: "Business Letter",
  //   price: 8,
  //   stock: 200,
  // });



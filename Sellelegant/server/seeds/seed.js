const db = require('../config/connection');
const {Products,Users} = require("../models")

//which seed do we want?
//const { //unsure? //} = require('../models');

db.once('open', async() => {
  await Users.deleteMany({})
  await Products.deleteMany({})

  await Users.collection.insertOne({
    email: "test@gmail.com",
    password: "123"
  })
  await Products.collection.insertOne({
    product_name: "Love Letter",
    price: 5,
    stock: 100
  })
  await Products.collection.insertOne({
    product_name: "Business Letter",
    price: 8,
    stock: 200
  })
  
  process.exit(0);
});


//THIS IS boiler plate, we need to change it when we find out what seeds we use

//db.once('open', async () => {
 // await cleanDB('Tech', 'teches');

  //await Tech.insertMany(techData);

  //console.log('Technologies seeded!');
//  process.exit(0);
//});


const db = require('./connection');
const { User, Product, Order } = require('../models');
const cleanDB = require('./cleanDB');
const userData = require('../seeds/userData.json');
let orderIndex = 0

db.once('open', async () => {
  await cleanDB("Order", "orders");
  await cleanDB("Product", "products");
  await cleanDB("User", "users");

  
  const products = await Product.insertMany([
    {
      productCode: "JS001",
      productName: "Job Set-up",
      productDescription:
        "Job profile, job description, and job posting. Includes 1 round of revisions.",
      price: 250.0,
      quantity: 1,
    },
    {
      productCode: "LP001",
      productName: "Laser Personalization - 1 Side",
      productDescription: "Print laser copy - 1-side on 50lb white paper.",
      price: 0.03,
      quantity: 5000,
    },
    {
      productCode: "MH001",
      productName: "Mail Handling",
      productDescription: "Mail House: folding, inserting, sealing",
      price: 0.035,
      quantity: 5000,
    },
  ]);

const orders = await Order.insertMany([
  {
    products: [products[0]._id, products[1]._id, products[2]._id],
    orderShipped: false,
  },
  {
    products: [products[0]._id, products[1]._id, products[2]._id],
    orderShipped: true,
  },
  {
    products: [products[0]._id, products[1]._id, products[2]._id],
    orderShipped: false,
  },
  {
    products: [products[0]._id, products[1]._id, products[2]._id],
    orderShipped: true,
  },
  {
    products: [products[0]._id, products[1]._id, products[2]._id],
    orderShipped: false,
  },
  {
    products: [products[0]._id, products[1]._id, products[2]._id],
    orderShipped: true,
  },
  {
    products: [products[0]._id, products[1]._id, products[2]._id],
    orderShipped: false,
  },
  {
    products: [products[0]._id, products[1]._id, products[2]._id],
    orderShipped: true,
  },
  {
    products: [products[0]._id, products[1]._id, products[2]._id],
    orderShipped: false,
  },
  {
    products: [products[0]._id, products[1]._id, products[2]._id],
    orderShipped: true,
  },
]);

console.log("categories seeded");


  console.log("products seeded");
  // insertmany will not encrpt the password
  // const users = await User.insertMany(userData);
  // so:
  for (const user of userData) {
    await User.create({ ...user, savedOrders: [orders[orderIndex]._id, orders[orderIndex+1]._id] });
    orderIndex += 2  // increment by 2 to get the next 2 orders
    
  }





  //   await User.create({
  //     firstName: 'Elijah',
  //     lastName: 'Holt',
  //     email: 'eholt@testmail.com',
  //     password: 'password12345'
  //   });

  console.log("users seeded");

  process.exit();
});

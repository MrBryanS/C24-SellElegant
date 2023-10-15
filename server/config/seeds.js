const db = require('./connection');
const { User, Product, Order } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Order', 'orders');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const orders = await Order.insertMany([
    { products: [] },
    { orderDate: '2023/10/05' },
    { orderShipped: true }
  ]);

  console.log('categories seeded');

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

  console.log('products seeded');

  await User.insertMany({
    userName: 'Joe Smith',
    email: 'joesmith@email.com',
    password: 'password12345',
    orders: [orders[0]._id]
  },
  {
    userName: 'Jane Smith',
    email: 'jane@email.com',
    password: 'password12345',
    orders: [orders[1]._id]
  });

//   await User.create({
//     firstName: 'Elijah',
//     lastName: 'Holt',
//     email: 'eholt@testmail.com',
//     password: 'password12345'
//   });

  console.log('users seeded');

  process.exit();
});

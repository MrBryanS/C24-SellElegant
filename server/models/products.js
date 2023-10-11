const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  product_name: {
    type: String,
    required: true,
  },
 price: {
    type: Number,
    required: true,
 },
 stock: {
    type: Number,
    required: true
 }

});

const Product = model('Product', productSchema);

module.exports = Product;


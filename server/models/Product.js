const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  productCode: {
    type: String,
    required: true,
  },
  
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  
});

const Product = model("Product", productSchema);

module.exports = Product;

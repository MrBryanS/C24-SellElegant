const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const orderSchema = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    orderDate: {
        type: Date,
        default: Date.now,
    },
    orderShipped: {
        type: Boolean,
        default: false,
    },
});


  
const Order = model("Order", orderSchema);

module.exports = Order;

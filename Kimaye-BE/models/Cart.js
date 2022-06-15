const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  image: String,
  title: String,
  price: Number,
  quantity: Number,
  category: String,
});

const Cart = model("cart", CartSchema);

module.exports = Cart;

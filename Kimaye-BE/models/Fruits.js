const { Schema, model } = require("mongoose");

const FruitSchema = new Schema({
  image: String,
  title: String,
  description: String,
  origin: String,
  price: Number,
  quantity: Number,
  category: String,
});

const Fruit = model("Fruit", FruitSchema);

module.exports = Fruit;

const { Router } = require("express");
const Cart = require("../models/Cart");

const cartRouter = Router();

cartRouter.post("/", async (req, res) => {
  const cart = new Cart(req.body);
  await cart.save();
  return res.status(200).send({ message: "Added to cart" });
});

cartRouter.get("/", async (req, res) => {
  const cartItems = await Cart.find({});
  res.status(200).send(cartItems);
});

module.exports = cartRouter;

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

cartRouter.patch("/", async (req, res) => {
  const { id, quantity } = req.body;
  const cart = await Cart.findByIdAndUpdate(id, { quantity });
  res.status(200).send(cart);
});

cartRouter.delete("/", async (req, res) => {
  const { id } = req.body;
  await Cart.findByIdAndDelete(id);
  res.status(200).send({ message: "Deleted from cart" });
});

module.exports = cartRouter;

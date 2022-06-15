const { Router } = require("express");
const Cart = require("../models/Cart");

const cartRouter = Router();

cartRouter.get("/cart", (req, res) => {});

module.exports = cartRouter;

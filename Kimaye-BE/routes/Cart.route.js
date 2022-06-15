const { Router } = require("express");
const Cart = require("../models/Cart");

const cartRouter = Router();

cartRouter.get("/", (req, res) => {});

module.exports = cartRouter;

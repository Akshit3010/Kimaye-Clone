const { Router } = require("express");
const Fruit = require("../models/Fruits");

const fruitsRouter = Router();

fruitsRouter.get("/allfruits", async (req, res) => {
  const fruits = await Fruit.find();
  res.status(200).send(fruits);
});

fruitsRouter.get("/cut-fruits", async (req, res) => {
  const fruits = await Fruit.find({ category: "Fresh cuts" });
  res.status(200).send(fruits);
});

fruitsRouter.get("/combo-fruits", async (req, res) => {
  const fruits = await Fruit.find({ category: "Fruit combos" });
  res.status(200).send(fruits);
});

fruitsRouter.get("/gifts", async (req, res) => {
  const fruits = await Fruit.find({ category: "Gifts" });
  res.status(200).send(fruits);
});

module.exports = fruitsRouter;

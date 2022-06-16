const { Router } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res
      .status(422)
      .json({ error: "Please fill each and every details" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exists" });
    } else {
      const user = new User({ firstName, lastName, email, password });
      await user.save();
      res
        .status(201)
        .json({ message: "user registered successfully", user: user });
    }
  } catch (err) {
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      if (!isMatch) {
        res.status(400).json({ error: "invalid details" });
      } else {
        res.status(201).json({ message: "user login successfully", token });
      }
    } else {
      res.status(400).json({ error: "invalid details" });
    }
  } catch (err) {
    console.log(err);
  }
});

userRouter.get("/logout", async (req, res) => {});

module.exports = userRouter;

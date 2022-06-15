const express = require("express");
const fruitsRouter = require("./routes/Products_route");
const userRouter = require("./routes/User_route");
const cors = require("cors");
const connection = require("./DB/db");
const cartRouter = require("./routes/Cart.route");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/", fruitsRouter);
app.use("/", cartRouter);
app.use("/auth", userRouter);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(PORT, async () => {
  await connection;
  console.log("Server started at http://localhost:8080");
});

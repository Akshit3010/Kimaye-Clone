const mongoose = require("mongoose");

const connection = mongoose
  .connect(
    "mongodb+srv://akshitrana21:Akshitrana1009@cluster0.ldehf.mongodb.net/kimaye?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;

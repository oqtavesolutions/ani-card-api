const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ silent: true });

const db = () =>
  mongoose
    .connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("db connected"))
    .catch((error) => console.log(error));

module.exports = db;

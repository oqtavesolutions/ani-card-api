const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const db = require("./db/database");
const Card = require("./models/Card");
const dotenv = require("dotenv");
dotenv.config({ silent: true });

db();
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to ani-card api" });
});

app.post("/", (req, res) => {
  // make sure to check if key exists in db.json first. Then create new link if needed
  // if the card is created, it will send along the id
  // there will be two ids, one for the db
  // one for the bitly
  axios.defaults.headers.common["apikey"] = process.env.REBRANDLEY_API_KEY;
  axios.defaults.headers.common["workspace"] =
    process.env.REBRANDLEY_WORKSPACE_ID;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios
    .post("https://api.rebrandly.com/v1/links", {
      destination: "https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g",
      domain: { fullName: "rebrand.ly" },
    })
    .then((response) => {
      const user = new Card({
        short_url: response.data.shortUrl,
        first_name: "Nahid",
        last_name: "Hossain",
        profile_image: "some+url",
        age: 19,
        blood_type: "A+",
        favorite_food: "Ramen",
        birthday: "12/12/2020",
        super_power: "Something",
        card_title: "あなたのスーパーヒーローカード",
      });
      user
        .save()
        .then((response) => res.status(200).json(response))
        .catch((error) => {
          console.error(error);
          res.status(503).json(error);
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(503).json(error);
    });
});

app.listen(process.env.PORT || 8000, () => console.log("listening"));

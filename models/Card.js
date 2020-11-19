const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  short_url: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  blood_type: {
    type: String,
    required: true,
  },
  favorite_food: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  super_power: {
    type: String,
    required: true,
  },
  card_title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("card", CardSchema);

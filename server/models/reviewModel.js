const mongoose = require("mongoose");
const Bottle = require("./bottleModel");
const User = require("./userModel");

const Schema = mongoose.Schema;
const reviewSchema = new Schema({
  writer: {
    type: User,
    required: true,
  },
  bottle: {
    type: Bottle,
    required: true,
  },
  review: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
});

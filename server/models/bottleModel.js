const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bottleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
  reviews: {
    type: [String],
  },
});

module.exports = mongoose.model("Bottle", bottleSchema);

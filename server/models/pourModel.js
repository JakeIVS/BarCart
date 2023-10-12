const mongoose = require("mongoose");
const Bottle = require("./bottleModel");
const Cocktail = require("./cocktailModel");

const Schema = mongoose.Schema;
const pourSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Pour", pourSchema);

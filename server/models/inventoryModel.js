const mongoose = require("mongoose");
const User = require("./userModel");
const Bottle = require("./bottleModel");

const Schema = mongoose.Schema;
const inventorySchema = new Schema({
  owner: {
    type: User,
    required: true,
  },
  bottle: {
    type: Bottle,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);

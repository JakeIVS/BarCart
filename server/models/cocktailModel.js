const mongoose = require("mongoose");
const Pour = require("./pourModel");

const Schema = mongoose.Schema;
const cocktailSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    baseSpirit: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [Pour],
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cocktail", cocktailSchema);

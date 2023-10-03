const mongoose = require("mongoose");

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
      type: [String],
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cocktail", cocktailSchema);

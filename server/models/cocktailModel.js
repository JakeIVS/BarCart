const mongoose = require("mongoose");
const Pour = require("./pourModel");

const Schema = mongoose.Schema;
const cocktailSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [Pour],
      required: true,
    },
    description: {
      type: String,
      required: true,
      minLength: [15, "Description must be at least 15 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cocktail", cocktailSchema);

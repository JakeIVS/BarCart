const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const cocktailSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    spirit: {
      type: String,
      required: true,
    },
    recipe: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cocktail", cocktailSchema);

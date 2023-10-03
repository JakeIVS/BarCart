const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bottleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Bottle", bottleSchema);

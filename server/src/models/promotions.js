const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

let promotions = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  }
});
module.exports = mongoose.model("promotions", promotions);

const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

module.exports = function() {
  let promotions = new Schema({
    name: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  });
  return mongoose.model("promotions", promotions);
};

const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const news = new Schema({
  title: {
    type: String,
    required: true
  },
  date: Date,
  newsBody: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: false
  }
});
module.exports = mongoose.model("news", news);

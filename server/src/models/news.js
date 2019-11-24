const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

module.exports = function() {
  const news = new Schema({
    title: {
      type: String,
      required: true
    },
    date: new Date(),
    newsBody: {
      type: String,
      required: true
    },
    images: {
      type: Object,
      required: false
    }
  });
  return mongoose.model("news", news);
};

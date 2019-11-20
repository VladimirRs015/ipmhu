const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
// const db = require("../libs/db.connection");
module.exports = (function() {
  const TachersSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    images: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    }
  });
  return mongoose.model("teachers", TachersSchema);
})();

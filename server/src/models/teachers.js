const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
// const db = require("../libs/db.connection");

const TachersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  state: String,
  asignature: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("teachers", TachersSchema);

/* 

  


*/

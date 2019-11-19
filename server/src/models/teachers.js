const Schema = require("mongoose").Schema;

const TachersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  }
});

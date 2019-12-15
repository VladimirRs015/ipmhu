const express = require("express");
const logger = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const App = express();
//Configs
App.set("port", process.env.PORT || 4000);
//Middlewares
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, path.join(__dirname, "public/uploads"));
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});
App.use(
  multer({
    storage
  }).single("image")
);
App.use(logger("dev"));
App.use(
  express.json({
    extended: true
    // type: urlencoded
  })
);
App.use(cors());

/////////////
///Database//
////////////
require("./libs/db.connection");

//Routes
App.use("/", require("./routes/index"));
//teachers
App.use(require("./routes/teachers.js"));
// //Promotions
App.use(require("./routes/promotions"));
// //News
App.use(require("./routes/news"));

App.use("/public", express.static(path.join(__dirname, "public")));
//Listen on
App.listen(App.get("port"), err => {
  if (err) {
    throw err;
  }
  console.log("Server on port", App.get("port"));
});

module.exports = App;

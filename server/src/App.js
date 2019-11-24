const express = require("express");
const logger = require("morgan");
const multer = require("multer");
const path = require("path");
const App = express();
//Configs
App.set("port", process.env.PORT || 4000);
//Middlewares
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, path.join(__dirname, "assets/uploads"));
  },
  filename: function(req, file, callback) {
    calllback(null, file.originalname);
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

//Routes
App.use("/", require("./routes/index"));
//teachers
App.use("./teachers", require("./routes/teachers"));
//Promotions
App.use("/promotions", require("./routes/promotions"));
//News
App.use("/news", require("./routes/news.js"));

//Listen on
App.listen(App.get("port"), err => {
  if (err) {
    throw err;
  }
  console.log("Server on port", App.get("port"));
});

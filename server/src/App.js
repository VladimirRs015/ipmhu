const express = require("express");
const logger = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const cookies = require('cookie-parser')
const session = require('express-session')

/////////////
///Database//
////////////
require("./libs/db.connection");
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
App.use(multer({storage}).single("image"));
  App.use(logger("dev"));
  App.use(express.json());
App.use(express.urlencoded({extended:true}))

//Config passport
App.use(cors({
  credentials:true , origin : 'http://localhost:8080',
}));
App.use(session({
  secret:'my secret',
  resave:true, 
  saveUninitialized : true
}))
App.use(cookies())

//passport 
// App.use(passport.initialize())
let passport = require('./libs/passport.config')
App.use(passport.initialize())
App.use(passport.session())



//Routes
App.use("/", require("./routes/index"));
//teachers
App.use(require("./routes/teachers.js"));
// //Promotions
App.use(require("./routes/promotions"));
// //News
App.use(require("./routes/news"));
// Login Routes
App.use(require('./routes/login'))
App.use("/public", express.static(path.join(__dirname, "public")));
//Listen on
App.listen(App.get("port"), err => {
  if (err) {
    throw err;
  }
  console.log("Server on port", App.get("port"));
});

module.exports = App;

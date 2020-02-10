const express = require("express");
const logger = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const cookies = require('cookie-parser')
const session = require('express-session')
const bcrypt = require('bcryptjs')

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

App.use(
  multer({
    storage
  }).single("image")
  );
  App.use(logger("dev"));
  App.use(
    express.json({})
    );
    App.use(express.urlencoded({extended:true}))
    App.use(cors());
    App.use(session({
      secret:'@#*(@#*@(*#*@#(@*#(@*98`939',
      resave:true, 
      saveUninitialized : true
    }))
    App.use(cookies())

//Authentication 
const userModel = require('./models/users')

//Serializer

passport.serializeUser((user,done)=>{
     done(null,user._id)
})
passport.deserializeUser((id,done)=>{
    userModel.findById(id).then(res=>{
        done(null,res)
    })
})
passport.use(new localStrategy(function(email,password,done){
    users.findOne({'email':email}).then((user)=>{
      let encryptedPassword = user.passport
      console.log(encryptedPassword)
      return done(null,user)
    })
    
}))

App.use(passport.initialize())
App.use(passport.session())
App.post('/signin',function(req,res,next){
   
  passport.authenticate('local',function(err,user,info){
      if(err) return next(err)
      if(!user){
          return res.status(401).send('Usuario no encontrado')
      }
      req.logIn(user,function(err){
          if(err) return next(err)
          res.send(user)
      })
  })(req,res,next)
  
  
  
})

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

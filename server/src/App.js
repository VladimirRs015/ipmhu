const express = require("express");
const logger = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const cookies = require('cookie-parser')
const session = require('express-session')
const jwk = require('jsonwebtoken')

/////////////
///Database//
////////////
require("./libs/db.connection");
const App = express();

//Test


// let user = {
//   name : 'vladimri', 
//   password : '1123', 
//   rol : 'admin'
// } 

// var token  = jwk.sign(user,' a secret',{
//   expiresIn : 60 * 60 * 24 
// })  
// App.get('/jwk',(req,res)=>{
//   res.send(token)
// })

// App.get('/flip',(req,res)=>{
//   let token = req.headers['authorization']
//   console.log(req.headers)
//   console.log(token)
//   if(!token){
//     res.status(401).send({
//       error: "Es necesario el token de autenticación"
//     })
//     return
//   }
// jwk.verify(token,' a secret',function(err,user){
//   if(err){ 
//     return res.status(401).send({message : 'Token invalido'})
//   }
//   else {
//     res.send({
//       message: 'Ajuaaaaa!!'
//     })
//   }
// })
// })
//Test





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

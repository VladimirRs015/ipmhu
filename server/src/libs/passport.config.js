const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')




//Authentication 
const userModel = require('../models/users')



//Serializer
passport.serializeUser((user,done)=>{
     return done(null,user._id)
})
passport.deserializeUser((id,done)=>{
    userModel.findByIdById(id).then(user=>{
        return done(null,user)
    })
})
passport.use(new localStrategy({
    usernameField : 'email', 
    passwordField : 'password'
},function(email,password,done){
    userModel.findOne({'email':email}).then((user)=>{
      bcrypt.compare(password,user.password).then(auth=>{
        if(auth){
            return done(null,user)
        }
        return done(null,false,{message : 'La contrasena no es correcta'})
      })
    })
    
}))

module.exports = passport
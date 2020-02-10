const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')
const userSchema = require('../models/users')



router.post('/signin',function(req,res,next){
   
    passport.authenticate('local',function(err,user,info){
        if(err) return next(err)
        if(!user){
            // return res.status(401).send('Usuario no encontrado')
        }
        req.logIn(user,function(err){
            if(err) return next(err)
            res.send(user)
        })
    })(req,res,next)
    
    
    
  })


router.post('/signup',async (req,res,next)=>{
    let params = {
        name : req.body.name, 
        email : req.body.email,
        password : req.body.password,
    }
    const SALD_AROUND = 10
    if(params.name && params.email && params.password){
        await   bcrypt.hash(params.password,SALD_AROUND).then(encryptedPass=>{
                params.password = encryptedPass 
                userSchema.create(params).then(user=>{
                res.status(200).send('El usuario se ha registrado satisfactoriamente')
                next()
                })
                .catch(err=>{
                if(err.errors.email){
                    if(err.errors.email.kind == 'unique'){
                        res.status(300).send('Este usuario ya esta regitrado actualmente')
                    }
                }
            })
        })
    }
    
})
module.exports = router
const mongoose = require('mongoose')
const Schema = require('mongoose').Schema 
const uniqueValidator = require('mongoose-unique-validator')

const validRoles = {
    values : ['admin','studiant','user','teacher','administrave personal'],
    message : 'Este rol no es valido'
}

const Users = new Schema({
    name : {
        type:String, 
        required:[true , 'El nombre de usuario debe ser obligatorio'], 
    },
    email: {
        unique : true,
        type:String, 
        required:[true , 'El email debe ser obligatorio'], 
    },
    password : {
        type : String , 
        required:[true, 'El password debe ser obligatorio'],
    },
    image : {
        type:String, 
        required:false, 
        default : ''
    },
    roles: {
        type :String , 
        require : false,
        default : 'user',
        enum: validRoles
    }
})
Users.methods.toJSON = function(){
    let user = this ; 
    let userObject = user.toObject()
    delete userObject.password 
    
    return userObject
}



Users.plugin(uniqueValidator,{message : 'Ya existe una cuenta con este correo'})
module.exports = mongoose.model('Users',Users)
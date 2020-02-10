const mongoose = require('mongoose')
const Schema = require('mongoose').Schema 
const uniquevalidator = require('mongoose-unique-validator')

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
    rolles: {
        type :String , 
        require : false,
        default : 'user'
    }
})
Users.plugin(uniquevalidator)
module.exports = mongoose.model('Users',Users)
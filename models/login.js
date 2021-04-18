const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        
    }
})



module.exports = mongoose.model('Login', LoginSchema)
const loginModel = require('../models/login');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = {
    authenticate: (req, res, next) => {
        const user = loginModel.create({username: req.body.username, password: req.body.password}, (err, record) => {
            if(err) {
                next(err)
            } else {
                console.log(record)
                const token = jwt.sign({id: record._id}, config.TOKEN_SECRET, {expiresIn: '1h'})
                res.json({success: true, message: "Login success", token: token})
            }
        })
        
    },
    saveAddress: (req, res, next) => {
        const userId = req.body.userId;
        let filter = {_id: userId}
        let update = {address: req.body.address}
        loginModel.findOneAndUpdate(filter, update, {new: true}, (err, record) => {
            if(err) {
                console.log(err);
                next(err)
            } else {
                res.json({success: true, data: record})
            }
        })
    }
}
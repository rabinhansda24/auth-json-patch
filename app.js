const express = require('express'); 
const logger = require('morgan');
var mongoose = require('mongoose')
var jwt = require('jsonwebtoken');
var cors = require('cors');
var path = require('path');

var config = require('./config');
const authRoutes = require('./routes/auth');


const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on('error', function(err) {
    console.log('Error: Could not connect to MongoDB.');
});

app.use((req, res, next) => {
    req.db = mongoose;
    next();
})

app.get('/', function(req, res){
    res.json({"data" : "Hello World"});
});

app.use('/users', authRoutes)



app.listen(config.LISTEN_PORT, () => {
    console.log("Listening on port " + config.LISTEN_PORT)
})
const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var path = require('path');
var config = require('./config');


const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.json({"data" : "Hello World"});
});



app.listen(config.LISTEN_PORT, () => {
    console.log("Listening on port " + config.LISTEN_PORT)
})
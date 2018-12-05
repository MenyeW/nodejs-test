var express = require('express');
var app = express();
require('./routes').route(app);

var port = 3000;

app.listen(port, ()=>{console.log('App running on localhost:'+port)});
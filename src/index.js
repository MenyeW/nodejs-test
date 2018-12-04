var express = require('express');
var app = express();
var routes = require('./routes');

routes.route(app);
var port = 3000;

app.listen(port, ()=>{});
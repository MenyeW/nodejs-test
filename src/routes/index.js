const fs = require('fs');
const express = require('express');
var app = express();

module.exports.route = (app) => {
	app.use(header);
	app.get('/', (req,res,next)=>{res.write('Base Page'); next();});
	app.use(footer);
}

function header(req,res,next){
	html = fs.readFileSync(__dirname+"/../common/header.html",'utf8');
	res.write(html);
	next();
}

function footer(req,res,next){
	html = fs.readFileSync(__dirname+"/../common/footer.html",'utf8');
	res.write(html);
	res.end();
}
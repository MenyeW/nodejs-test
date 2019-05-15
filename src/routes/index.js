const fs = require('fs');
const express = require('express');
const path = require('path');
const configController = require('../controllers/configController')

module.exports.route = (app) => {
	app.get('/css/:css.css',css);
	app.get('/js/:js.css',js);

	app.get('/', [header,navbar,(req,res,next)=>{res.write('Base Page '.repeat(1000)); next();},bottomNavbar,footer]);
	app.get('/config', [header, navbar, configController.printConfig, bottomNavbar, footer]);
}

function css(req,res,next){
	res.sendFile(path.resolve(__dirname+"/../common/css/"+req.params.css+".css"), 'utf8');
}

function js(req,res,next){
	res.sendFile(path.resolve(__dirname+"/../common/js/"+req.params.js+".js"), 'utf8');
}

function header(req,res,next){
	html = fs.readFileSync(path.resolve(__dirname+"/../common/views/header.html"),'utf8');
	res.write(html);
	next();
}

function navbar(req,res,next){
	html = fs.readFileSync(path.resolve(__dirname+"/../common/views/navbar.html"),'utf8');
	res.write(html);
	next();
}

function bottomNavbar(req,res,next){
	html = fs.readFileSync(path.resolve(__dirname+"/../common/views/bottomNavbar.html"),'utf8');
	res.write(html);
	next();
}

function footer(req,res,next){
	html = fs.readFileSync(path.resolve(__dirname+"/../common/views/footer.html"),'utf8');	
	res.write(html);
	res.end();
}

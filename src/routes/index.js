var echoer = require('../echoer/echo');

module.exports.route = (app) => {
	app.get('/', (req,res)=>{ /*res.render({'Hello World'});*/ res.send('Hello World!');});
	app.get('/echo/:string',echoer.echo);
	app.get('/echotwice/:string',echoer.echotwice);
}
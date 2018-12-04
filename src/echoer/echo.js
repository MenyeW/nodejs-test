var preparePage = (str) => {
	html = '<html><head><title>Echo Page</title></head><body><h1> A navbar could be here </h1><br/>The message recieved was : ';
	html += str;
	html += '<br/><br/> This is donezo.';
	return html;
}

exports.echo = (req,res) => { var string = req.params.string; var resString = preparePage(string); res.send(resString);}
exports.echotwice = (req,res) => { var string = req.params.string; var resString = preparePage(string) + preparePage(string); res.send(resString);}
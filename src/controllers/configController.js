

module.exports.printConfig = function(req, res, next){
    res.write('config!')
    next();
}
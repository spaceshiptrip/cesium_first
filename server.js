var connect = require('connect');
var serveStatic = require('serve-static');
//var port = process.argv.slice(2);
// print process.argv
var port = 8080;
var myArgs = process.argv;
myArgs.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});
// port = myArgs[2];
connect().use(serveStatic(__dirname)).listen(port, function(){
        console.log('Server running on ' + port + '...');

});

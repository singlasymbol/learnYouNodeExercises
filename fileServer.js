var http = require('http')
var filePath = process.argv[3];
var fs = require('fs');

var server = http.createServer(function(request, response){
	fs.createReadStream(filePath).pipe(response);
})


server.listen(process.argv[2])
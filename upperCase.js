var http = require('http')

var server = http.createServer(function(request, response){
	var finalData = ""

	if(request.method == "POST") {
		request.on('data', function(data){
			finalData = finalData + data.toString().toUpperCase()
		});
	}

    request.on('end', function () {
		response.write(finalData)
    });

})


server.listen(process.argv[2])
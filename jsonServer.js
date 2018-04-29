var http = require("http")
var url = require("url")

var server = http.createServer(function(request, response){
	var urlString = url.parse(request.url, true)
	// console.log(urlString);
	var res = ""
	var time = new Date(urlString.query.iso)

	switch(urlString.pathname) {
		case "/api/parsetime" :  
			res = parseTime(time);
			break;
		case "/api/unixtime":
			res = sendUnixTime(time)
			break;
	}

	if (res) {
		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify(res))
	} else {
		response.writeHead(404)
	    response.end()
	}
})


function parseTime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function sendUnixTime (time) {
  return { unixtime: time.getTime() }
}



server.listen(process.argv[2]);
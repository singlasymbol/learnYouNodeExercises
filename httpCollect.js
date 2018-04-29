// var http = require("http");
// var url = process.argv[2];
// var characterLength = 0;
// var resultString = "";

// http.get(url, function(response){

// 	response.setEncoding("utf8");

// 	response.on("data", function(data){
// 		characterLength = characterLength + data.length;
// 		resultString = resultString + data;
// 	})

// 	response.on("error", function(error){
// 		console.log(error);
// 	})

// 	response.on("end", function(){
// 		console.log(characterLength);
// 		console.log(resultString);
// 	})

// });


//or

var http = require("http")
var bl = require("bl")
var url = process.argv[2];

http.get(url,function(response){

	response.pipe( bl(function(error, data){
		if(error){
			return console.log(error)
		}
		data = data.toString();

		console.log(data.length);
		console.log(data);
	}))
})
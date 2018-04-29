var http = require("http")
var bl = require("bl")
var urls = []

// for(var i = 0; i < 3;i++) {
// 	urls[i] = process.argv[i + 2];
// 	console.log("urls" , urls[i])
// }

var index = 0;


function AsyncOperation(index){
	http.get(process.argv[index + 2], function(response){

		response.on("error", function(error){
			console.log("error occured ",error)
		});

		response.pipe(bl(function(error, data){

			if(error){
				console.log(error)
			}

			console.log(data.toString());
			if(index + 1< 3) {
				AsyncOperation(index + 1);
			}
		}))
	})

}

AsyncOperation(0);

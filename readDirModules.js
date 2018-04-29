var dirPath = process.argv[2];
var fileExtension = process.argv[3];
var filterFunction = require("./utils");

filterFunction(dirPath, fileExtension, function (error, data) {
	if(error) {
		return console.log(error)
	}
	
	data.forEach(function (file) {
		console.log(file)
	})
	
});

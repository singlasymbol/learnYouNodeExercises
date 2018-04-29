var fs = require("fs");
var filePath = process.argv[2];

fs.readFile(filePath, function callback(err, fileData){
	if(!err) {
		// console.log("file data", fileData);
		countLines(fileData);
	}else {
		console.log("error occured ", err);
	}
})

function countLines(fileData) {
	console.log((fileData.toString().split('\n').length) - 1);
}
var fs = require("fs");
var dirPath = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(dirPath, function(err, files){
	var sum = 0;
	if(!err){
		var fileArray = files.toString().split(',');
		for(var i = 0; i < fileArray.length;i++) {
			if(fileArray[i].indexOf("." + fileExtension) != -1) {
				console.log(fileArray[i]);
			}
		}

	}else{
		console.log("error occured", err);
	}
})
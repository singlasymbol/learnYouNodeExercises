var fs = require("fs");

module.exports = function(dirPath, fileExtension, callback){

	fs.readdir(dirPath, function(err, files){

		if(err) {
			return callback(err);
		}

		var fileArray = files.toString().split(',');
		var filteredArray = new Array();

		for(var i = 0; i < fileArray.length;i++) {
			if(fileArray[i].indexOf("." + fileExtension) != -1) {
				filteredArray.push(fileArray[i]);
			}
		}

		return callback(null, filteredArray);
		
	})
}

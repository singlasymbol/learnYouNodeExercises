var fs = require('fs')
var filePath = process.argv[2];

var buff = fs.readFileSync(filePath);
var str = buff.toString();
var splitArray = str.split('\n');

console.log(splitArray.length - 1);

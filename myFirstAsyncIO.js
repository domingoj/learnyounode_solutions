var fs = require('fs');

var buffer = fs.readFile(process.argv[2], function(err, buffer){
	
	if(err){
		return console.log(err);
	}
	
	var newLines = buffer.toString().split('\n').length - 1;
	console.log(newLines);
});

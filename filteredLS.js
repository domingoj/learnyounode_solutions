var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extn = process.argv[3];

fs.readdir(dir, function(err, files){

	if(err) return console.error(err);

	files.forEach(function(file){

		if(path.extname(file) == '.' + extn)
			console.log(file);
		});
	});
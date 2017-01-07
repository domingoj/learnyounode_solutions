var reader = require('./reader');

var dir = process.argv[2];
var extn = process.argv[3];

reader(dir, extn, function(err, files){
	if(err) return console.error(err);

	files.forEach(function(file){
			console.log(file);

	});

});
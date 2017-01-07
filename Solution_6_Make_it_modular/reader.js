var fs = require('fs');
var path = require('path');

module.exports = function(dir, extn, callback){

	fs.readdir(dir, function(err, files){

		if(err) return callback(err);

		files = files.filter(function(file){

			return path.extname(file) === '.' + extn;

		});

		callback(null, files);
	});

};


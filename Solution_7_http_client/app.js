var http = require('http');

var url = process.argv[2];

http.get(url, function(response){

	response.setEncoding('utf8')
		.on("data", function(data){

			console.log(data);
		})
		.on('error', function(error){

			console.error(error);
		})

	}).on('error', function(error){

			console.error(error);	
		});
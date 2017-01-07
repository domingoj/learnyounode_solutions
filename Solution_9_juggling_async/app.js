var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;

function printResults(){
	for (var i = 0; i<3; i++){
		console.log(results[i]);
	}
}

httpGet = function(i){


http.get(process.argv[2 + i], function(response){

	response.pipe(bl(function(err, data){

		if(err){
			return console.error(err);
		} 

		results[i] = data.toString();
		count++;

		if(count === 3){
			printResults();
		}
	}))

	}).on('error', function(error){

			console.error(error);	
		});
};

for(var i = 0; i<3 ; i++){
	httpGet(i);
}





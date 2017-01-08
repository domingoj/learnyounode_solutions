var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){

	var data = strftime('%Y-%m-%d %H:%M', new Date());
	socket.write(data + '\n');
	socket.end();

	//or we can do this
	/*
	socket.end(data);
	*/

});

server.listen(process.argv[2]);
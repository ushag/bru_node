//var sys = require("sys"), http = require("http");
//
//http.createServer(function(request, response) {
//	response.writeHead(200, {
//		"Content-Type" : "text/html"
//	});
//	response.write("Hello World!");
//	response.end();
//}).listen(9008);
//
//sys.puts("Server running at http://localhost:9008/");

var connect = require('connect');
var server = connect.createServer(
		connect.logger(),
		connect.static(__dirname)
		);

server.listen(9000);
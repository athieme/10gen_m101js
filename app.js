var express = require("express");
var cons = require("consolidate");
var mongodb = require("mongodb");
var http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-type":"text/plain"});
    response.end("Hello, World\n");
});
server.listen(1337);
console.log("Server running at http://localhost:1337");

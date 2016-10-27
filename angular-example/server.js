var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    var pathname = __dirname + url.parse(req.url).pathname;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.readFile('./simple-example/default.html', function (err, data) {
        if (err) {
            console.log(err.message);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(port);
var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    var q= url.parse(req.url, true).query;
    var txt= q.txt + "<br> " + q.email + "<br> " + q.pwd;
    res.end(txt);
}).listen(8080);
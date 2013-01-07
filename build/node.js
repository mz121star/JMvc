var fs = require('fs');
var http = require('http');

var _path = "index.html";
var _basePath = "E:/CodeSource/FrontEndDevlopment/JMvc"


http.createServer(function (req, res) {
    console.log("require url is " + req.url);

    if (!(/\./gmi).test(req.url))
        _path = _basePath + "/index.html";
    else
        _path = _basePath + req.url;

    console.log("path is:" + _path);
    var type = req.url.split(".").pop();

    fs.readFile(_path, function (err, data) {
        if (err) console.log("error:" + err);
        responseHttp(res, type, data);
    });

}).listen(1337, '192.168.1.103');
console.log('Server running at http://127.0.0.1:1337/');

//http response
var responseHttp = function (res, type, data) {
    res.writeHead(200, {'Content-Type':routetable[type]});
    res.end(data);
}

var routetable = {
    "js":'text/javascript',
    "html":"text/html",
    "htm":"text/htm",
    "css":"text/css"
}
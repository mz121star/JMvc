var mhttp = require("./mhttp");

function Start(url) {
    mhttp.get(url).done(function (data) {
        regUrl(data);
    });
};
function regUrl(data) {
    //var reg = /(http):\/\/[a-zA-Z0-9+&@#/%=~_|$?!:,.-]*[a-zA-Z0-9+&@#/%=~_-|$]/gmi;
    var reg = /(http):\/\/[a-zA-Z0-9+&@#\/%=~_|$?!:,.-]*\.+[a-zA-Z0-9+&@#\/%=~_-|$.-]*\.(html|htm|asp|jsp|aspx|php)/gmi;
   var html = data.toString();
    var result = html.match(reg);
    for (var i in result) {
        Start(result[i].toString());
        console.log(result[i].toString())
    }
};
Start("http://www.baidu.com/s?wd=mongdb");
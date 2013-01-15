var mhttp = require("./mhttp");
var fs = require('fs');
//var imgReg=/src=[\'\"]?([^\'\"]*)\.(jpg|jpeg|png)/gi;

var imgReg = /(?!src=[\'\"]?)([^\'\"]*)\.(jpg|jpeg|png)/gi;
var allImgs=[];
for (var i = 1; i < 30; i++) {
    getPic("http://wanimal.lofter.com/?page=" + i,wirteFiles);

}
function wirteFiles(){
fs.writeFile('resut.txt',allImgs.join('\n'),function(err){
    //if(err) throw err;
    console.log(err);
});
}
function getPic(url,callback) {
    mhttp.get(url).done(function (data) {
        var content = data + "";
       var imgs = content.match(imgReg);
        if (imgs == null) return;
        for (var i = 0, len = imgs.length; i < len; i++) {
            console.log(imgs[i]);
            allImgs.push(imgs[i]);
        }
        callback();
    })
}
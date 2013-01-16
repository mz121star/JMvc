var mhttp = require("./mhttp");
var fs = require('fs');
var url = require('url');
var http = require("http");

var imgReg = /(?!src=[\'\"]?)([^\'\"]*)\.(jpg|jpeg|png)/gi;
var allImgs = [];
var DOWNLOAD_DIR = 'download/';
var num = 1;
for (var i = 1; i < 30; i++) {
    getPic("http://wanimal.lofter.com/?page=" + i, wirteFiles);

}
function wirteFiles() {
    fs.writeFile('resut.txt', allImgs.join('\n'), function (err) {
        //if(err) throw err;
        console.log(err);
        DownLoadPic()
    });
//   for(var i= 0,l=allImgs.length;i<l;i++){
//      console.log("number---------->"+i);
//      setTimeout(function(){  DownLoadPic(allImgs[i]);},5000);
//   }

}
function getPic(url, callback) {
    mhttp.get(url).done(function (data) {
        var content = data + "";
        var imgs = content.match(imgReg);
        if (imgs == null) return;
        for (var i = 0, len = imgs.length; i < len; i++) {
            console.log(imgs[i]);
            allImgs.push(imgs[i]);
        }
        console.log("group complete!")
        callback();
    })
}
function DownLoadPic(file_url) {
     var count = allImgs.length;
    for (var i = 0, l = allImgs.length; i < l; i++) {
        file_url=allImgs[i];
        if(file_url.indexOf("http")<0) return
        var file_name = url.parse(file_url).pathname.split('/').pop();

        mhttp.get(file_url).done(function (data) {
            var mfile = fs.createWriteStream(DOWNLOAD_DIR + file_name);
            mfile.write(data);
        });

//        http.get(file_url, function (res) {
//            var mfile = fs.createWriteStream(DOWNLOAD_DIR + file_name);
//            count--;
//            res.on('data',function (data) {
//                mfile.write(data);
//            }).on('end',function () {
//                    if (count === 0) {
//                        console.log("download !");
//                    }
//                    mfile.end();
//                    console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
//                }).on('error', function (e) {
//                    console.log(e);
//                });
//        });
    }
}
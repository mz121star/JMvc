var $ = require(
‘
jquery
’),
fs = require(
‘
fs
’),
http = require(
‘
http
’)
;

//http参数对象
var options = {
    host:
’
zh.wikipedia.org
’,
port:80,
    path
:’
/wiki/ % E5 % 9
D % A6 % E5 % 85 % 8
B
’
}
;

var html =
”
;//http获取html字符串
var tankBook = {};//分析html获得数据对象

http.get(options, function (res) {
    res.on(‘data’,
    function (data) {//加载数据，一般会执行多次
        html += data;
    }

    ).
    on(‘end’,
    function () {//加载完成
        var dom = $(html);//生成文档树
        tankBook.title = dom.find(‘#firstHeading’).
        text();//获取文档标题
        tankBook.coverImageUrl = dom.find(‘.
        thumbimage’).
        first()[0].src;//获取文档封面图url
        console.log(‘book.title
    : ‘ +tankBook.title + ‘ book.coverImageUrl
    : ‘ +tankBook.coverImageUrl
    )
        ;
        savekImageFile();
    }

    )
    ;
});

function savekImageFile() {
    var hostName = tankBook.coverImageUrl.split(‘/’)[2];
    var path = tankBook.coverImageUrl.substring(tankBook.coverImageUrl.indexOf(hostName) + hostName.length);

    var options = {
        host:hostName,
        port:80,
        path:path
    };

    http.get(options, function (res) {
        res.setEncoding(‘binary’)
        ;
        var imageData = ”;

        res.on(‘data’,
        function (data) {//图片加载到内存变量
            imageData += data;
        }

        ).
        on(‘end’,
        function () {//加载完毕保存图片
            fs.writeFile(‘tank.png’,
            imageData, ‘binary’,
            function (err) {
                if (err) throw err;
                console.log(‘file
                saved’)
                ;
            }

        )
            ;
        }

        )
        ;
    });
}
var http = require("http");
(function () {
    var mhttp;
    mhttp = {
        get:function (url) {
            var scuessCallbacks=[],
                errorCallbacks = [];
            var deferred = {
                done:function (callback) {
                   if( typeof callback==='function') scuessCallbacks.push(callback);
                    return this;
                },
                fail:function (callback) {
                    if( typeof callback==='function') errorCallbacks.push(callback);
                    return this;
                }
            }
            try{
            http.get(url, function (res) {
                res.on('data',function (d) {
                    for (i = 0, n = scuessCallbacks.length; i < n; i++) {
                        scuessCallbacks[i](d);
                        //console.log("scuess lenght:"+scuessCallbacks.length);
                    }
                })  .on('error', function (e) {
                             for (i = 0, n = errorCallbacks.length; i < n; i++) {
                            errorCallbacks[i](e);
                        }
                 });
            });
            }
            catch(e) {
                console.log(e.message)
            }
            return deferred;
        }
    }
    module.exports = mhttp;
})(module);
var http = require("http");
(function () {
    var mhttp;
    mhttp = {
        get:function (url) {
            var scuessCallbacks = [],
                errorCallbacks = [],
                responseHTML;
            var deferred = {
                done:function (callback) {
                    if (typeof callback === 'function') scuessCallbacks.push(callback);
                    return this;
                },
                fail:function (callback) {
                    if (typeof callback === 'function') errorCallbacks.push(callback);
                    return this;
                }
            }
            http.get(url, function (res) {
                res.on('data',function (d) {
                    responseHTML = responseHTML + d;
                }).on('end',function () {
                        for (i = 0, n = scuessCallbacks.length; i < n; i++) {
                            scuessCallbacks[i](responseHTML);
                        }
                    }).on('error', function (e) {
                        for (i = 0, n = errorCallbacks.length; i < n; i++) {
                            errorCallbacks[i](e);
                        }
                    });
            });
            return deferred;
        }
    }
    module.exports = mhttp;
})(module);
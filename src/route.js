/*
 路由
 */
(function () {
    var JMvc = JMvc || {};
    JMvc.Route = {
        Create:function (options) {
            var opt = options;
            return{
                Start:function () {
                    var redirect = function () {
                        var hash = window.location.hash.replace("#", "");
                        var routeTable = opt["Paths"];
                        !routeTable[hash] || opt[routeTable[hash]]();
                       // JMvc.Analyzer(hash,routeTable)
                    };
                    if (window.location.hash) { redirect();};
                    window.onhashchange = function () {redirect(); };
                },
                Stop:function () {

                },
                Pause:function () {

                }
            };
        }
    };
    window.JMvc = JMvc;
})();

/*
 使用方法

 var route=JMvc.Route.Create({
 Paths:{
 "!/index":"index",
 "!/about":"about"
 },
 index:function(){
 console.log("index render");
 },
 about:function(){
 console.log("about");
 }
 });
 route.Start();

 window.location.hash="!/about"
 */
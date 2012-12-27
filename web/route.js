var route=JMvc.Route.Create({
    Paths:{
        "!/index":"index",
        "!/about":"about",
        "!/product":"product"
    },
    index:function(){
        console.log("首页显示");
        document.getElementById("route").innerHTML="<h1>首页显示</h1>";
    },
    about:function(){
        console.log("大连市");
        document.getElementById("route").innerHTML="<h1>大连市</h1>";
    },
    product:function(){
        console.log("产品列表");
        document.getElementById("route").innerHTML="<ul><li>iphone</li></ul>";


    }
}).Start();



describe("JMvc route", function() {

    beforeEach(function() {

        var route=JMvc.Route.Create({
            Paths:{
                "!/index":"index",
                "!/about":"about",
                "!/product":"product"
            },
            index:function(){
              document.body.innerHTML="<h1>首页显示</h1>";
            },
            about:function(){
                document.body.innerHTML="<h1>dalian</h1>";
            },
            product:function(){
               document.body.innerHTML="<ul><li>iphone</li></ul>";


            }
        }).Start();
    });

    it("hash changed", function() {
        window.location.hash="!/about";
        var html=document.body.innerHTML;
        console.log("neirong:"+html);
        expect(html).toEqualText("dalian");
    });
});
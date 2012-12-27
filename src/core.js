/**
 * Created with JetBrains WebStorm.
 * User: R20983
 * Date: 12-12-24
 * Time: 上午9:21
 * To change this template use File | Settings | File Templates.
 */
(function (window, undefined) {
    var JMvc = {};
    JMvc.application=function(){

    };
    JMvc.Model = {
        Create:function (obj) {
            this.modelData = obj;
            return this;
        }

    };
    window.J$ = window.JMvc = JMvc;
})(window, undefined)

//MVC Model
(function (JMvc) {
        JMvc.Model.prototype = {

            getData:function () {
                return JSON.parse(this.modelData);
            }
        }
})(JMvc)


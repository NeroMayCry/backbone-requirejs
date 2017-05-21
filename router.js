/**
 * Created by gjwlg on 2017/5/22.
 */
define(['backbone'], function (Backbone) {

    var Router = Backbone.Router.extend({

        routes: {
            '': 'hello',
            'hello': 'hello',
            '*actions': 'defaultAction'
        },

        //路由初始化可以做一些事
        initialize: function () {},

        hello: function () {
            var _url = 'src/modual/hello/view.js';
            require([_url], function (View) {
                var view = new View();
                view.render();
            });
        },

        defaultAction: function () {
            // router.navigate("", {trigger: true});
            router.navigate("", {trigger: true});
        }
    });
    var router = new Router();

    return router;    //这里必须的，让路由表执行
});

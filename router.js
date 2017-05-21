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

        //·�ɳ�ʼ��������һЩ��
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

    return router;    //�������ģ���·�ɱ�ִ��
});

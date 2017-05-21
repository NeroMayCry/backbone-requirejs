define([
    'common/BaseView',
    'modual/hello/model',
    'text!modual/hello/tpl.html',
], function (BaseView, HelloModel, tpl) {

    var helloView = BaseView.extend({

        id: 'helloView',

        template: tpl,

        events: {

        },

        pageInit: function () {
            this.model = new HelloModel();
        },

        initPlugins: function () {

        }
    });

    return helloView;
});
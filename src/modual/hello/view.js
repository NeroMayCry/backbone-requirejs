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

        onPageCreate: function () {
            this.model = new HelloModel();
            this.model.set({
                say: 'Hello World!'
            });
        },

        onPageStart: function () {

        }
    });

    return helloView;
});
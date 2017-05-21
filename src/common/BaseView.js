/**
 * Created by lyting on 16-4-25.
 */
define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

    var BaseView = Backbone.View.extend({

        el: '#container',

        initialize: function () {
            console.log("load view >>> " + this.id);
            this.undelegateEvents();
            this.$el.empty().off();

            this.model = null;

            if (this.template) {
                this.$el.html(this.template);
                this.template = _.template(this.template);
            }
            this.initRouter();

            this.pageInit();

            this.delegateEvents();
        },

        initRouter: function () {

        },

        pageInit: function (attrs) {
        },

        initPlugins: function () {
        },

        render: function () {
            var model = this.model ? this.model.toJSON() : {};
            this.$el.html(this.template(model));
            this.initPlugins();
            return this;
        }
    });

    return BaseView;
});

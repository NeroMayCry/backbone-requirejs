/**
 * Created by lyting on 16-5-27.
 */
define(['backbone'], function (Backbone) {
    var _collection = Backbone.Collection.extend({
        initialize: function () {
            this.initCollection();
        },

        initCollection: function () {
        },

        sendPOST: function (options) {
            options = _.extend({
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                error: function (model, textStatus, errorThrown) {
                    console.log(errorThrown);
                    console.error("网络请求失败！");
                }
            }, options);
            if(options["url"]){
                options["url"] = window.API + options["url"];
            }
            // this.fetch(options);
            $.ajax(options);
        }
    });
    return _collection;
});

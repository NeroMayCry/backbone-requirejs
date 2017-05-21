/**
 * Created by lyting on 16-5-11.
 */
define(['backbone'], function (Backbone) {

    var _model = Backbone.Model.extend({
        initialize: function () {
        },
        sendPOST: function (options) {
            options = _.extend({
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                error: function (model, textStatus, errorThrown) {
                    console.log(errorThrown);
                    console.error("网络请求失败！");
                },
                beforeSend: function () {
                    $.showLoading();
                },
                complete: function () {
                    $.hideLoading();
                }
            }, options);
            if(options["url"]){
                options["url"] = window.API + options["url"];
            }
            // this.fetch(options);
            $.ajax(options);
        }
    });
    return _model;
});


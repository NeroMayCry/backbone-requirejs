/**
 * Created by lyting on 16-5-11.
 */
define(['common/BaseModel'],function(BaseModel) {

    var helloModel = BaseModel.extend({

        defaults: {
            say: ''
        }

        //hello:function(url,callback){
        //    this.sendPOST({
        //        url:url,
        //        data:{},
        //        success:callback
        //    });
        //}

    });

    return helloModel;
});
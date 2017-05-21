/**
 * Created by gjwlg on 2017/5/22.
 */
require.config({
    waitSeconds: 0,
    baseUrl: './src/',
    paths: {
        'jquery': 'lib/jquery-2.2.3',
        'storage': 'lib/jquery.storageapi',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'text': 'lib/text',
        'css': 'lib/css',
        'json': 'lib/json',
        '_fetchText': 'lib/_fetchText',
    },
    shim: {
        'backbone': {
            'deps': ['underscore'],
            'exports': 'Backbone'
        },
        'jquery': {
            'exports': '$'
        },
        'underscore': {
            'exports': '_'
        },
        'storage': {
            'deps': ['jquery']
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'router.js', 'storage'],
    function ($, _, Backbone, Router, storage) {

        Backbone.history.start();   //开始监控url变化

        window.storage = $.localStorage;    // 重新定义系统本地存储对象

        window.router = Router;  // 定义系统router

    });
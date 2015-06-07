require.config({
    paths: {
        underscore: "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
        backbone:   "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
        jquery:     "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min",
        bootstrap:  "//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min"
    },

    shim:        {
        underscore: {
            exports: "_"
        },

        backbone: {
            exports: "Backbone",
            deps:    ["jquery", "underscore"]
        },

        bootstrap: {
            deps: ["jquery"]
        }
    },
    waitSeconds: 60
});

require([
    "jquery",
    "views/Test",
    "bootstrap"
], function ($, TestView) {
    "use strict";

    $(function () {
        var testView = new TestView;
    });
});
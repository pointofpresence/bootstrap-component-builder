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
    "underscore",

    "views/Button",
    "views/Size",
    "views/Color",
    "views/Name",
    "views/Icon",

    "models/Button",

    "lib/Icons",
    "lib/Search",

    "bootstrap"
], function ($, _,
             ButtonView, SizeView, ColorView, NameView, IconView,
             ButtonModel,
             icons) {
    "use strict";

    $(function () {
        var button = new ButtonModel,
            buttonView = new ButtonView({model: button}),
            sizesView = new SizeView({model: button}),
            typesView = new ColorView({model: button}),
            nameView = new NameView({model: button}),
            iconView = new IconView({model: button});

        var iconClasses = [];

        _.each(icons, function (i) {
            if (i) {
                iconClasses.push("glyphicon glyphicon-" + i);
            }
        });

        $(".typeahead").typeahead({
            source: iconClasses,
            items:  12
        });

        $(document).on("click", "a[href='#']", function (e) {
            e.preventDefault();
        });

        $('[data-toggle="tooltip"]').tooltip();
    });
});
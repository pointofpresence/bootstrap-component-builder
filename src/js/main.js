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

    "views/Button",
    "views/Size",
    "views/Color",
    "views/Name",
    "views/Icon",

    "models/Button",

    "lib/Search",
    "bootstrap"
], function ($, ButtonView, SizeView, ColorView, NameView, IconView, ButtonModel) {
    "use strict";

    $(function () {
        var button = new ButtonModel;
        var buttonView = new ButtonView({model: button});
        var sizesView = new SizeView({model: button});
        var typesView = new ColorView({model: button});
        var nameView = new NameView({model: button});
        var iconView = new IconView({model: button});
        var icons = [];

        $(".bs-glyphicons").children().each(function () {
            var classStr = $(this).find("a").find("span").attr("class");
            icons.push(classStr)
        });

        $(".typeahead").typeahead({
            source: icons,
            items:  12
        });

        $('[data-toggle="tooltip"]').tooltip();

        $('a.result-tab').on('shown.bs.tab', function (e) {
            $($(e.target).attr("href"))
                .find("input:first")
                .trigger("click"); // newly activated tab

            $($(e.relatedTarget).attr("href"))
                .find("input")
                .prop("checked", false); // previous active tab

            buttonView.render();
        })
    });
});
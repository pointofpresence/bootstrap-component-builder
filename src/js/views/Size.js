define("views/Size", [
    "backbone",
    "jquery"
], function (Backbone, $) {
    "use strict";

    return Backbone.View.extend({
        el: "#sizes",

        events: {
            "click button":        "open",
            "click #button-block": "toggle"
        },

        open: function (e) {
            e.preventDefault();

            this.model.set({
                size: parseInt($(e.currentTarget).data("value"))
            });
        },

        toggle: function (e) {
            e.preventDefault();

            this.model.set({
                fullwidth: !this.model.get("fullwidth")
            });
        }
    });
});
define("views/Icon", [
    "backbone",
    "jquery"
], function (Backbone, $) {
    "use strict";

    return Backbone.View.extend({
        el: "#icons",

        events: {
            "click .bs-glyphicons a":      "update",
            "click #icon-position button": "updatePosition",
            "click #icon-color button":    "updateColor",
            "change input#search":         "updateFromSearch"
        },

        updatePosition: function (e) {
            e.preventDefault();

            this.model.set({
                iconplacement: e.currentTarget.value
            });
        },

        update: function (e) {
            e.preventDefault();

            if ($(e.currentTarget).find("span").hasClass('empty-icon')) {
                this.model.set({icon: ""});
                return;
            }

            this.model.set({
                icon: $(e.currentTarget).find("span").attr("class")
            });
        },

        updateFromSearch: function (e) {
            e.preventDefault();

            this.model.set({
                icon: e.currentTarget.value
            });
        }
    });
});
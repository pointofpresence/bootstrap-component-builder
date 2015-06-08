define("views/Icon", [
    "backbone",
    "jquery",
    "templates",

    "lib/Icons"
], function (Backbone, $, templates, icons) {
    "use strict";

    return Backbone.View.extend({
        el:       "#icons",
        template: templates.Icons,

        events: {
            "click #remove-icon":          "clear",
            "click .bs-icons a":           "update",
            "click #icon-position button": "updatePosition",
            "click #icon-color button":    "updateColor",
            "change input#search":         "updateFromSearch"
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$(".bs-icons").html(this.template({icons: icons}));
            return this;
        },

        updatePosition: function (e) {
            e.preventDefault();

            this.model.set({
                iconplacement: e.currentTarget.value
            });
        },

        clear: function (e) {
            e.preventDefault();
            this.model.set({icon: ""});
        },

        update: function (e) {
            e.preventDefault();

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
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
            "click .bs-glyphicons a":      "update",
            "click #icon-position button": "updatePosition",
            "click #icon-color button":    "updateColor",
            "change input#search":         "updateFromSearch"
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$(".bs-glyphicons").html(this.template({icons: icons}));
            return this;
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
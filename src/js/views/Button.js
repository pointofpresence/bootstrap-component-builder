define("views/Button", [
    "backbone",
    "templates",
    "jquery",

    "lib/Components"
], function (Backbone, templates, $, components) {
    "use strict";

    return Backbone.View.extend({
        el: "#result",

        initialize: function () {
            this.$("#type-" + this.model.get("gadget")).prop("checked", true);
            this.model.on("change", this.render, this);
            this.render()
        },

        events: {
            "click #output":  "selectOutput",
            "change .gadget": "setGadget"
        },

        setGadget: function (e) {
            var g = $(e.currentTarget).data("type");
            this.model.set({gadget: g})
        },

        selectOutput: function (e) {
            var t = $(e.currentTarget);
            t.select()
        },

        render: function () {
            var g = this.model.get("gadget");

            var d = {
                type:          components[this.model.get("gadget")]["color"][this.model.get("type")],
                size:          components[this.model.get("gadget")]["size"][this.model.get("size")],
                fullwidth:     this.model.get("fullwidth"),
                iconplacement: this.model.get("iconplacement"),
                icon:          this.model.get("icon"),
                name:          this.model.get("name")
            };

            var t = templates["output" + g];
            var e = t(d);

            this.$("#button").html(e);
            this.$("#output").val(e);

            if (components[this.model.get("gadget")]["url"]) {
                this.$("#button").append(
                    templates.More({
                        url:  components[this.model.get("gadget")]["url"],
                        name: components[this.model.get("gadget")]["name"]
                    })
                );
            }
        }
    });
});
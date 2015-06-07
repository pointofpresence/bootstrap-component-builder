define("views/Button", [
    "backbone",
    "templates",
    "jquery",
    "underscore",

    "lib/Components"
], function (Backbone, templates, $, _, components) {
    "use strict";

    return Backbone.View.extend({
        el: "#result",

        initialize: function () {
            this.components = _.extend({}, components.js, components.components);
            this.model.on("change", this.render, this);

            this.firstTime = true;
            this.render();
            this.$("#type-" + this.model.get("gadget")).prop("checked", true);
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
            if (this.firstTime) {
                this.firstTime = false;

                this.$("#tab-component .form-group").html(templates.Components({
                    items: components.components
                }));

                this.$("#tab-snippet .form-group").html(templates.Components({
                    items: components.js
                }));
            }

            var g = this.model.get("gadget");

            var d = {
                type:          this.components[this.model.get("gadget")]["color"][this.model.get("type")],
                size:          this.components[this.model.get("gadget")]["size"][this.model.get("size")],
                fullwidth:     this.model.get("fullwidth"),
                iconplacement: this.model.get("iconplacement"),
                icon:          this.model.get("icon"),
                name:          this.model.get("name")
            };

            var t = templates["output" + g];
            var e = t(d);

            this.$("#button").html(e);
            this.$("#output").val(e);

            if (this.components[this.model.get("gadget")]["url"]) {
                this.$("#button").append(
                    templates.More({
                        url:  this.components[this.model.get("gadget")]["url"],
                        name: this.components[this.model.get("gadget")]["name"]
                    })
                );
            }
        }
    });
});
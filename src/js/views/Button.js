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

            $.get("http://api.bootswatch.com/3/", (function (data) {
                this.themes = data.themes;
                var select = this.$("#theme");

                this.themes.forEach(function (value, index) {
                    select.append($("<option />")
                        .val(index)
                        .text(value.name));
                });

                if (localStorage.theme) {
                    this.setTheme(localStorage.theme);
                } else {
                    this.setTheme(select.val());
                }
            }).bind(this), "json");
        },

        events: {
            "click #output":  "selectOutput",
            "change #theme":  "onThemeChange",
            "change .gadget": "setGadget"
        },

        onThemeChange: function (e) {
            this.setTheme($(e.currentTarget).val());
        },

        setTheme: function (name) {
            localStorage.theme = name;
            var css = null;

            if (name) {
                var theme = this.themes[name];
                css = theme.css;
            } else {
                css = "//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css";
            }

            $("link#bootstrap").attr("href", css);
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
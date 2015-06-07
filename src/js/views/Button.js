define("views/Button", [
    "backbone",
    "templates",
    "jquery"
], function (Backbone, templates, $) {
    "use strict";

    return Backbone.View.extend({
        template: templates.Output,
        el:       "#result",

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
            var that = this;

            this.render.draw = function () {
                var g = that.model.get("gadget");

                var d = {
                    type:          components[that.model.get("gadget")]["color"][that.model.get("type")],
                    size:          components[that.model.get("gadget")]["size"][that.model.get("size")],
                    fullwidth:     that.model.get("fullwidth"),
                    iconplacement: that.model.get("iconplacement"),
                    icon:          that.model.get("icon"),
                    name:          that.model.get("name")
                };

                var t = that.render.template[g];
                var e = _.template(t, d);

                that.$el.find("#button").html(e);
                that.$el.find("#output").val(e);

                if (components[that.model.get("gadget")]["url"]) {
                    that.$el.find("#button").append(
                        _.template('<p class="no-bottom has-top"><a target="_blank" href="<%= url %>"><span class="glyphicon glyphicon-info-sign"></span> See more about <%= name %></a></p>', {
                            url:  components[that.model.get("gadget")]["url"],
                            name: components[that.model.get("gadget")]["name"]
                        })
                    );
                }
            };

            this.render.template = this.render.template || {};

            if (!this.render.template[this.model.get("gadget")]) {
                $.get('templates/output' + this.model.get("gadget"), function (template) {
                    that.render.template[that.model.get("gadget")] = template;
                    that.render.draw();
                })
            } else {
                that.render.draw();
            }
        }
    });
});
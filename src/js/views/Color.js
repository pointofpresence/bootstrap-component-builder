define("views/Color", [
    "backbone",
    "jquery"
], function (Backbone, $) {
    "use strict";

    return Backbone.View.extend({
        el:     $("#types"),
        events: {"click button": "open"},

        open: function (e) {
            this.model.set({
                type: parseInt($(e.currentTarget).data("value"))
            });
        }
    });
});
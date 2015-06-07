define("views/Name", [
    "backbone"
], function (Backbone) {
    "use strict";

    return Backbone.View.extend({
        el: "#input",

        events: {
            "change input#name": "update"
        },

        update: function (e) {
            e.preventDefault();

            this.model.set({
                name: e.currentTarget.value
            });
        }
    });
});
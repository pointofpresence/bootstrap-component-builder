define("models/Button", [
    "backbone"
], function (Backbone) {
    "use strict";

    return Backbone.Model.extend({
        defaults: {
            name:          "Default text here",
            size:          2,
            fullwidth:     false,
            type:          0,
            icon:          "",
            iconplacement: "left",
            gadget:        "Link"
        }
    });
});
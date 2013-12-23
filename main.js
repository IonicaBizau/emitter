var Bind = require("github/jillix/bind");
var Events = require("github/jillix/events");

module.exports = function init (config) {

    // get the module
    var self = this;

    // call Events
    Events.call(self, config);

    // emit the custom event or "ready"
    self.emit(config.eventWhenReady || "ready", config);

};

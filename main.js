var Bind = require("github/jxmono/bind");
var Events = require("github/jxmono/events");

module.exports = function init (config) {

    // get the module
    var self = this;

    // call Events
    Events.call(self, config);

    // run binds
    if (config.binds) {
        for (var i = 0; i < config.binds.length; ++i) {
            Bind.call(self, config.binds[i]);
        }
    }

    // emit the custom event or "ready"
    self.emit(config.eventWhenReady || "ready", config);

};

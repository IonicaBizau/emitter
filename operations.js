/*
 *  emitter->emit
 *
 *  This operation will emit an event on the server side that contains
 *  the link object. This event will be listened by a custom script.
 *
 * */
exports.emit = function (link) {

    // get the params
    var params = link.params || {};

    // create event to emit
    var eventToEmit = params.eventName || "emitter.eventNameToEmit";

    // and finally emit it
    M.emit(eventToEmit, link);
};

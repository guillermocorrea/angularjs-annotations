"use strict";
exports.__esModule = true;
function Component(options) {
    return function (target) {
        var ctor;
        ctor = function () {
            Object.assign(this, options);
        };
        ctor.prototype = Object.create(target.prototype);
        ctor.prototype.constructor = target;
        return ctor;
    };
}
exports.Component = Component;

"use strict";
exports.__esModule = true;
/**
 * Component decorator.
 * @param {angular.IComponentOptions} options - The component options.
 *
 * ### Example
 *
 * ```typescript
 * import { Component } from 'angularjs-annotations';
 *
 * @Component({
 *  controller: AppComponentController,
 *  template: require('./app.component.html')
 * })
 * export class AppComponent implements ng.IComponentOptions {}
 * ```
 */
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

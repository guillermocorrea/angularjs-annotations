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
export function Component(options: angular.IComponentOptions): Function {
    return <returnFunc extends Function>(target: returnFunc) => {
        var ctor: Function;
        ctor = function() { 
            Object.assign(this, options);
        };

        ctor.prototype = Object.create(target.prototype);
        ctor.prototype.constructor = target;
        return <returnFunc>ctor;
    };
}
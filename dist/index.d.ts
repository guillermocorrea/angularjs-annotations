/// <reference types="angular" />
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
export declare function Component(options: angular.IComponentOptions): Function;

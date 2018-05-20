# angularjs-annotations
[![CircleCI](https://circleci.com/gh/guillermocorrea/angularjs-annotations.svg?style=svg)](https://circleci.com/gh/guillermocorrea/angularjs-annotations)
[![Coverage Status](https://coveralls.io/repos/github/guillermocorrea/angularjs-annotations/badge.svg)](https://coveralls.io/github/guillermocorrea/angularjs-annotations)

Angularjs Typescript annotations to mimic Angular syntax.

## Installation 
```sh
npm install angularjs-annotations --save
yarn add angularjs-annotations
bower install angularjs-annotations --save
```
## Usage
### TypeScript
```typescript
import { Component } from 'angularjs-annotations';

@Component({
  controller: AppComponentController,
  template: require('./app.component.html')
})
export class AppComponent implements ng.IComponentOptions {
}
```
## Test 
```sh
npm run test
```
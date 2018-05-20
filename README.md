# angularjs-annotations
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
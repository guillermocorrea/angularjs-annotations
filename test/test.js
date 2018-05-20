'use strict';

var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('annotations', () => {
    it('should set component options', () => {
        var controller = null, template = 'template';
        var options = {
            controller: controller,
            template: template
        };
        var appController = function () {};
        var resultDecorator = index.Component(options);
        var resultConstructor = resultDecorator(appController);
        resultConstructor.call(appController);
        expect(appController.controller).to.be.equal(options.controller);
        expect(appController.template).to.be.equal(options.template);
    });
});
'use strict';

var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('annotations', () => {
    it('should return a function', () => {
        var controller = null, template = 'template';
        var result = index.Component({
            controller: controller,
            template: template
        });
        expect(result).to.be.a('function');
    });
});
/* eslint-disable */
const calc = require('./calc.js');
const expect = require('chai').expect;
const assert = require('chai').assert;
describe('Calculator Tests', function () {
    it('returns 3+1=4', function (done) {  
        expect(calc.add(3, 1)).to.equal(4);
        done();
    });
    it('returns 2*2=4', function (done) {
        assert.equal(calc.mul(2, 2),4);
        done();
    });
});
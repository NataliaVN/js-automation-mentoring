let assert = require('assert');
let task1 = require('../app/1task');

describe('Test min method', function() {
    describe('with positive', function() {
        it('check returned value', function() {
            let expected = 5;
            let actual = task1(2, 3);
            assert.equal(expected, actual);
        });
    });
    describe('with negative', function() {
        it('check returned value', function() {
            let expected = -5;
            let actual = task1(-2, -3);
            assert.equal(expected, actual);
        });
    });
});
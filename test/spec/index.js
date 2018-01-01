const assert = require('assert')
const context = require('../context/')
const testTest_2 = require('../../src/')

const testTest_2TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testTest_2, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testTest_2()
        })
    },
}

module.exports = testTest_2TestSuite

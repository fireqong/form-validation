import numeric from "../src/numeric.js"
import assert from 'assert'

describe('numeric', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{numeric('1', 'age')})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{numeric('0abc', 'age')}, Error)
        })
    })
})
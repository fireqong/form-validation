import length from "../src/length.js"
import assert from 'assert'

describe('length', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{length('123456', 'length', 6)})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{length('1', 'length', 6)}, Error)
        })
    })
})
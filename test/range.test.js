import range from "../src/range.js"
import assert from 'assert'

describe('range', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{range('1', 'gender', '1', '2')})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{range('0', 'gender', '1', '2')}, Error)
        })
    })
})
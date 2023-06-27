import between from "../src/between.js"
import assert from 'assert'

describe('between', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{between('1', 'gender', '1', '2')})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{between('0', 'gender', '1', '2')}, Error)
        })
    })
})
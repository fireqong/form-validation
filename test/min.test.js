import min from "../src/min.js"
import assert from 'assert'

describe('min', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{min('church', 'username', 6)})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{min('', 'username', 6)}, Error)
            assert.throws(()=>{min('c', 'username', 6)}, Error)
        })
    })
})
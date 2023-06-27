import max from "../src/max.js"
import assert from 'assert'

describe('max', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{max('church', 'username', 255)})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{max('churchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurchchurch', 'username', 255)}, Error)
        })
    })
})
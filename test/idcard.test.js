import idcard from "../src/idcard.js"
import assert from 'assert'

describe('idcard', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{idcard('140501198111035371', 'idcard')})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{idcard('14050119811103537X', 'idcard')}, Error)
        })
    })
})
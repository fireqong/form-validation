import telephone from "../src/telephone.js"
import assert from 'assert'

describe('telephone', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{telephone('18565919379', 'telephone')})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{telephone('0', 'telephone')}, Error)
            assert.throws(()=>{telephone('185659193791', 'telephone')}, Error)
        })
    })
})
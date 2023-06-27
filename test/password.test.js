import password from "../src/password.js"
import assert from 'assert'

describe('password', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{password('123abcAbc', 'gender')})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{password('/.,', 'gender')}, Error)
        })
    })
})
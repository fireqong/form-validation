import required from "../src/required.js"
import assert from 'assert'

describe('required', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{required('1', 'username')})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{required(notExistsVariable, 'username')}, Error)
            assert.throws(()=>{required('', 'username')}, Error)
        })
    })
})
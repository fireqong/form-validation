import email from "../src/email.js"
import assert from 'assert'

describe('email', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{email('qq@qq.com', 'email')})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{email('@qq.com', 'email')}, Error)
            assert.throws(()=>{email('xxx@', 'email')}, Error)
            assert.throws(()=>{email('xxx@xxx', 'email')}, Error)
        })
    })
})
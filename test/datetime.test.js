import datetime from "../src/datetime.js"
import assert from 'assert'

describe('datetime', function() {
    describe('#noerror', function() {
        it('should has not any error', function() {
            assert.doesNotThrow(()=>{datetime('2023-01-02', 'birthday')})
            assert.doesNotThrow(()=>{datetime('2023/01/02', 'birthday')})
            assert.doesNotThrow(()=>{datetime('2023-01-02 12:00:00', 'birthday')})
            assert.doesNotThrow(()=>{datetime('2023/01/02 12:00:00', 'birthday')})
        })
    })

    describe('#error', function() {
        it('should show error', function() {
            assert.throws(()=>{datetime('11232131', 'birthday')}, Error)
        })
    })
})
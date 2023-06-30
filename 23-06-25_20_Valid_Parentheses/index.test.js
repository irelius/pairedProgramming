import { describe, expect, it } from 'vitest'
import isValid from '.'

describe('Should work', () => {
    it('should work', () => {
        var s = ""
        expect(isValid(s)).toEqual(true)
    })
    it('should work', () => {
        var s = "()"
        expect(isValid(s)).toEqual(true)
    })
    it('should work', () => {
        var s = "()[]{}"
        expect(isValid(s)).toEqual(true)
    })
    it('should work', () => {
        var s = "(]"
        expect(isValid(s)).toEqual(false)
    })
    it('should work', () => {
        var s = "(([]))"
        expect(isValid(s)).toEqual(true)
    })

})

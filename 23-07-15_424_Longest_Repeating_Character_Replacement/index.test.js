import { describe, expect, it } from 'vitest'
import characterReplacement from '.'

describe('It should work', () => {

    it('should work', () => {
        var s = "ABAB"
        var k = 2
        expect(characterReplacement(s, k)).toEqual(4)
    })
    it('should work', () => {
        var s = "AABABBA"
        var k = 1
        expect(characterReplacement(s, k)).toEqual(4)
    })
    it('should work', () => {
        var s = "ABAAAAA"
        var k = 1
        expect(characterReplacement(s, k)).toEqual(7)
    })
    it('should work', () => {
        var s = "ABAA"
        var k = 0
        expect(characterReplacement(s, k)).toEqual(2)
    })
    it('should work', () => {
        var s = "AAAB"
        var k = 0
        expect(characterReplacement(s, k)).toEqual(3)
    })
    it('should work', () => {
        var s = "BAAA"
        var k = 0
        expect(characterReplacement(s, k)).toEqual(3)
    })
    it('should work', () => {
        var s = "ABBB"
        var k = 2
        expect(characterReplacement(s, k)).toEqual(4)
    })
    it('should work', () => {
        var s = "BAAAB"
        var k = 2
        expect(characterReplacement(s, k)).toEqual(5)
    })
})

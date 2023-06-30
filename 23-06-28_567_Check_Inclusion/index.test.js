import { describe, expect, it } from 'vitest'
import checkInclusion from '.'

describe('It should work', () => {
    it('should work', () => {
        var s1 = "ab"
        var s2 = "eidbaooo"
        expect(checkInclusion(s1, s2)).toEqual(true)
    })
    it('should work', () => {
        var s1 = "ab"
        var s2 = "eidboaoo"
        expect(checkInclusion(s1, s2)).toEqual(false)
    })

    it('should work', () => {
        var s1 = "adc"
        var s2 = "dcda"
        expect(checkInclusion(s1, s2)).toEqual(true)
    })

    it('should work', () => {
        var s1 = "hello"
        var s2 = "ooolleoooleh"
        expect(checkInclusion(s1, s2)).toEqual(false)
    })
})

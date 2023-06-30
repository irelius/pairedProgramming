import { describe, expect, it } from 'vitest'
import lengthOfLongestSubstring from '.'

describe('It should work', () => {
    it('should work', () => {
        var s = "abcabcbb"
        expect(lengthOfLongestSubstring(s)).toEqual(3)
    })
    it('should work', () => {
        var s = "bbbbb"
        expect(lengthOfLongestSubstring(s)).toEqual(1)
    })
    it('should work', () => {
        var s = "au"
        expect(lengthOfLongestSubstring(s)).toEqual(2)
    })
    it('should work', () => {
        var s = "pwwkew"
        expect(lengthOfLongestSubstring(s)).toEqual(3)
    })
})

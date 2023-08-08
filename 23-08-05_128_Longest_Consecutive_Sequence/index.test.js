import { describe, expect, it } from 'vitest'
import longestConsecutive from '.'

describe('It should work', () => {
    it('should work', () => {
        var nums = [0,3,7,2,5,8,4,6,0,1]
        expect(countNegatives(nums)).toEqual(9)
    })
})

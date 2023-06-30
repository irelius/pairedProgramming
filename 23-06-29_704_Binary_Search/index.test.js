import { describe, expect, it } from 'vitest'
import search from '.'

describe('It should work', () => {
    it('should work', () => {
        var nums = [-1,0,3,5,9,12]
        var target = 9
        expect(search(nums, target)).toEqual(4)
    })
    it('should work', () => {
        var nums = [-1,0,3,5,9,12]
        var target = 2
        expect(search(nums, target)).toEqual(-1)
    })
})

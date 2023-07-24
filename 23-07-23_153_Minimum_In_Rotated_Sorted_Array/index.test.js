import { describe, expect, it } from 'vitest'
import findMin from './index'

describe('It should work', () => {
    it('should work', () => {
        var nums = [3,4,5,1,2]
        expect(findMin(nums)).toMatchObject(1)
    })
    it('should work', () => {
        var nums = [4,5,6,7,0,1,2]
        expect(findMin(nums)).toMatchObject(0)
    })
    it('should work', () => {
        var nums = [11,13,15,17]
        expect(findMin(nums)).toMatchObject(11)
    })
    it('should work', () => {
        var nums = [2, 1]
        expect(findMin(nums)).toMatchObject(1)
    })
    it('should work', () => {
        var nums = [3,1,2]
        expect(findMin(nums)).toMatchObject(1)
    })
    it('should work', () => {
        var nums = [2,3,4,5,1]
        expect(findMin(nums)).toMatchObject(1)
    })
})

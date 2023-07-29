import { describe, expect, it } from 'vitest'
import countNegatives from './index'

describe('It should work', () => {
    it('should work', () => {
        var grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
        expect(countNegatives(grid)).toEqual(8)
    })
    it('should work', () => {
        var grid = [[3,2],[1,0]]
        expect(countNegatives(grid)).toEqual(0)
    })
    it('should work', () => {
        var grid = [[3,-1,-3,-3,-3],[2,-2,-3,-3,-3],[1,-2,-3,-3,-3],[0,-3,-3,-3,-3]]
        expect(countNegatives(grid)).toEqual(16)
    })
})

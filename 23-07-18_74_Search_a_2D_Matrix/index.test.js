import { describe, expect, it } from 'vitest'
import searchMatrix from '.'

describe('It should work', () => {

    it('should work', () => {
        var matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
        var target = 3
        expect(searchMatrix(matrix, target)).toEqual(true)
    })
    it('should work', () => {
        var matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
        var target = 13
        expect(searchMatrix(matrix, target)).toEqual(false)
    })
    it('should work', () => {
        var matrix = [[1]]
        var target = 1
        expect(searchMatrix(matrix, target)).toEqual(true)
    })
})

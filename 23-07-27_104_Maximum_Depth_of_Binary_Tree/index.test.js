import { describe, expect, it } from 'vitest'
import maxDepth from './index'

describe('It should work', () => {
    it('should work', () => {
        var nums = [3,4,5,1,2]
        expect(maxDepth(nums)).toMatchObject(1)
    })
})

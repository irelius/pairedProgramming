import { describe, expect, it } from 'vitest'
import invertTree from './index'

describe('It should work', () => {
    it('should work', () => {
        var nums = [3,4,5,1,2]
        expect(invertTree(nums)).toMatchObject(1)
    })
})

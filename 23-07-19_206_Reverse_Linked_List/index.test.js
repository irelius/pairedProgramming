import { describe, expect, it } from 'vitest'
import reverseList from '.'

describe('It should work', () => {
    it('should work', () => {
        var head = [1, 2, 3, 4, 5]
        expect(reverseList(head)).toMatchObject(true)
    })
    // it('should work', () => {
    //     var head = [1, 2, 3, 4, 5]
    //     expect(reverseList(head)).toMatchObject([5, 4, 3, 2, 1])
    // })
    // it('should work', () => {
    //     var head = [1, 2]
    //     expect(reverseList(head)).toMatchObject([2, 1])
    // })
})

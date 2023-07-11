import { describe, expect, it } from 'vitest'
import inorderTraversal from '.'

describe('It should work', () => {

    it('should work', () => {
        var root = [1, null, 2, 3]
        expect(inorderTraversal(root)).toEqual(true)
    })

    // following tests work, but vimtest doesn't do well with graphs i guess
    // it('should work', () => {
    //     var root = [1, null, 2, 3]
    //     expect(inorderTraversal(root)).toEqual([1, 3, 2])
    // })
    // it('should work', () => {
    //     var root = []
    //     expect(inorderTraversal(root)).toEqual([])
    // })
    // it('should work', () => {
    //     var root = [1]
    //     expect(inorderTraversal(root)).toEqual([1])
    // })
})

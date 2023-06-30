import { describe, expect, it } from 'vitest'
import bestTimeToBuyAndSellStock from '.'

describe('It should work', () => {
    it('should work', () => {
        var s = [7,1,5,3,6,4]
        expect(bestTimeToBuyAndSellStock(s)).toEqual(5)
    })
    it('should work', () => {
        var s = [7,6,4,3,1]
        expect(bestTimeToBuyAndSellStock(s)).toEqual(0)
    })
    it('should work', () => {
        var s = [5,100,1,200]
        expect(bestTimeToBuyAndSellStock(s)).toEqual(199)
    })
})

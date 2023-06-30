import { describe, expect, it } from 'vitest'
import dailyTemp from '.'

describe('20 should work', () => {
    it('should work', () => {
        var s = [55,38,53,81,61,93,97,32,43,78]
        expect(dailyTemp(s)).toEqual([3,1,1,2,1,1,0,1,1,0])

        var s = [30,40,50,60]
        expect(dailyTemp(s)).toEqual([1,1,1,0])

        var s = [30,60,90]
        expect(dailyTemp(s)).toEqual([1,1,0])
    })
})

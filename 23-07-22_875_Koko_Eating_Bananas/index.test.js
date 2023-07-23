import { describe, expect, it } from 'vitest'
import minEatingSpeed from './index'

describe('It should work', () => {
    it('should work', () => {
        var piles = [3,6,7,11]
        var h = 8
        expect(minEatingSpeed(piles, h)).toMatchObject(4)
    })
    it('should work', () => {
        var piles = [30,11,23,4,20]
        var h = 5
        expect(minEatingSpeed(piles, h)).toMatchObject(30)
    })
    it('should work', () => {
        var piles = [30,11,23,4,20]
        var h = 6
        expect(minEatingSpeed(piles, h)).toMatchObject(23)
    })
})

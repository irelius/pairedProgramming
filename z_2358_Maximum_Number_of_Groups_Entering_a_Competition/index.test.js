import { describe, expect, it } from 'vitest'
import maximumGroups from '.'

describe("It should work", () => {
    it("should work", () => {
        var grades = [10, 6, 12, 7, 3, 5]
        expect(maximumGroups(grades)).toEqual(3)
    })
    it("should work", () => {
        var grades = [8, 8]
        expect(maximumGroups(grades)).toEqual(1)
    })
})

import {describe, it, expect} from "vitest"
import countNodes from "."


describe("it should work", () => {
    it("should work", () => {
        var root = [1, 2, 3, 4, 5, 6]
        expect(countNodes(root)).toEqual(6)
    })
})

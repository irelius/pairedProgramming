/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    // Input: piles = [3,6,7,11], h = 8
    // Output: 4
    // output is 4 because it would take...
    // 1 hour to finish [0] of 3 bananas
    // 2 hours to finish [1] of 6
    // 2 hours to finish [2] of 7
    // 3 hours to finish [3] of 11
    // 8 hours total
    // this was easy to figure out because we knew what k was, which is the answer

    // the question is how to reverse that pattern to be able to find k

    // edge(?) case:
    // if the number of piles in the array equals the hours, then
    // k equals the highest value in the pile
    // use Math.max(...[])

    // binary search
    // what is high, what is low?
    // high would be the highest value of the array
    // low would be 0

    //  [3, 6, 7, 11], h = 8
    // low = 0
    // high = 11
    // mid = (11+0)/2 = 5.5 = 5
    // loop through and calculate Math.ceiling, add to value
    // you have to check if the value's total is greater than h
    // if it is, move low or high
    // moving low or high
    // set low to mid when value is lower than h
    // set high to mid when value is higher than h
    // stop when value is equal to h


    // edge case:
    if (piles.length - 1 === h) {
        return Math.max(...piles)
    }

    let low = 0
    let high = Math.max(...piles)
    let answer = high;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        let value = loopThrough(piles, mid)

        if (value > h) {
            low = mid + 1
        } else if (value <= h) {
            high = mid - 1
            answer = mid
        }
    }

    return answer
};

const loopThrough = (array, mid) => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += Math.ceil(array[i] / mid)
    }

    return total
}

export default minEatingSpeed

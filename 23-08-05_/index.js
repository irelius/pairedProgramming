/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let newNums = Array.from(set)

    let sorted = newNums.sort((a, b) => a - b)
    let l = 0;
    let r = 1;
    let counter = 1;
    let tempCounter = 1;

    if(nums.length === 0) {
        return 0
    }

    while(r < sorted.length) {
        let left = sorted[l]
        let right = sorted[r]

        if(left + 1 === right) {
            tempCounter++
            l++
        } else {
            tempCounter = 1;
            l = r
        }

        if(tempCounter > counter) {
            counter = tempCounter
        }

        r++
    }

    return counter
};

export default longestConsecutive

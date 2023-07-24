/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let lPointer = 0
    let rPointer = nums.length - 1


    while (lPointer < rPointer) {
        let mPointer = Math.floor((rPointer + lPointer) / 2)
        let mValue = nums[mPointer]
        // [1, 2, 3, 4, 5]
        // [5, 4, 3, 2, 1]
        // [2, 3, 4, 5, 1]
        // [5, 1, 2, 3, 4]
        // [4, 5, 1, 2, 3]
        // [3, 1, 2]

        // if the mValue is greater than the right most value of the subarray being checked
            // then the subarray you're on is unsorted (rotated)
            // move the left pointer to the mid pointer, but plus 1 because
                // you know it's not the answer and there may be an infinite loop
        // if the mValue is less
            // then the subarray you're on is sorted (unrotated)
            // move the right point to the mid pointer, but NOT minus 1 because
                // is it possible that the value you're currently on is the start of the sorted subarray (unrotated subarray)
        if (mValue > nums[rPointer]) {
            lPointer = mPointer + 1
        } else {
            rPointer = mPointer
        }
    }

    return nums[lPointer]
};

export default findMin

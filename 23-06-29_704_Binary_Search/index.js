/**
 * @param {string} s
 * @return {boolean}
 */


var search = function (nums, target) {
    let min = 0;
    let max = nums.length - 1

    while(min < max) {
        let mid = Math.floor((max + min + 1) / 2)

        if(nums[mid] === target) {
            return mid
        }

        if(nums[mid] <= target) {
            min = mid
        } else {
            max = mid - 1
        }

    }

    return -1
};

export default search

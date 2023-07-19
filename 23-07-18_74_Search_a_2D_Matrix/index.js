/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let min = 0;
    let max = matrix.length - 1

    if(matrix.length === 0) {
        return false
    }

    if(matrix.length === 1) {
        return binarySearchHelper(matrix[0], target)
    }

    while(min <= max) {
        let mid = Math.floor((max + min) / 2)
        let midArr = matrix[mid]

        if(midArr[0] > target) {
            max = mid - 1
        } else if(midArr[midArr.length - 1] < target) {
            min = mid + 1
        } else {
            return binarySearchHelper(midArr, target)
        }
    }

    return false

};


const binarySearchHelper = (array, target) => {
    let min = 0;
    let max = array.length - 1;

    while(min <= max) {
        let mid = Math.floor((max + min) / 2)

        if(array[mid] === target) {
            return true
        }

        if(array[mid] < target) {
            min = mid + 1
        } else {
            max = mid - 1
        }
    }

    return false
}

export default searchMatrix

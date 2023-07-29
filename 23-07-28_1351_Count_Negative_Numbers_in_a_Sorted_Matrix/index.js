/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    // given a matrix
        // example one shows that the numbers are not increasing from row to row
        // example one shows that each row could have a negative number
            // so it's necessary to check each row
            // but it's a pretty simple matter of using binary search for each row

    // given a particular row:
        // check if the first number is negative
            // if it is, u know that the rest of the row must be negative
                // so this is just a nice check to do
        // similarly, check if the last number is negative
            // if it isn't, u know that the entire row must be positive
                // another nice check to do
        // given that both previous conditions are not met, there must be some number of negative numbers in the row
            // use a binary search for the row (create helper function)
            // given the index of the first positive number, counter should increase by length - index - 1

    let counter = 0;
    for(let i = 0; i < grid.length; i++) {
        let curr = grid[i]
        if(curr[0] < 0) {
            counter += curr.length
            continue
        }
        if(curr[curr.length - 1] >= 0) {
            continue
        }
        counter += binarySearchHelper(curr)
    }

    return counter
};


const binarySearchHelper = (curr) => {
    let left = 0;
    let right = curr.length - 1


    while(left <= right) {
        let mid = Math.floor((right + left) / 2)
        if(curr[mid] >= 0) {
            left = mid + 1
        } else if(curr[mid] < 0) {
            right = mid - 1
        }
    }

    return curr.length - left
}

export default countNegatives

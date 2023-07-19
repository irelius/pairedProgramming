/**
 * @param {string} s
 * @return {boolean}
 */

var maxProfit = function (prices) {
    //     // set up two variables to keep track of the pointers of the stocks
    //     // set up variable to keep track of highest profit
    //     //


    //     // [5, 100, 1, 5]

    let l = 0;
    let r = 1;
    let profit = 0;

    while (r < prices.length) {
        let left = prices[l]
        let right = prices[r]

        if (left > right) {
            l = r
        } else if (right - left > profit) {
            profit = right - left
        }
        r++
    }

    return profit
};


// var maxProfit = function (prices) {
//     // [5, 100, 1, 5]

//     let l = 0;
//     let r = 1;
//     let profit = 0;

//     while (r < prices.length) {
//         let left = prices[l]
//         let right = prices[r]

//         if (right - left > profit) {
//             profit = right - left
//         }

//         if (r === prices.length - 1) {
//             l++
//             r = l
//         }

//         r++
//     }
//     return profit
// };

export default maxProfit

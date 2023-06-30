/**
 * @param {string} s
 * @return {boolean}
 */
var bestTimeToBuyAndSellStock = function (stocks) {

    // set up two variables to keep track of the pointers of the stocks
    // set up variable to keep track of highest profit
    //


    // [5, 100, 1, 5]

    let left = 0;
    let right = 1;
    let highestProfit = 0;

    while(right < stocks.length) {
        if(stocks[left] > stocks[right]) {
            left = right
        } else {
            let tempProfit = stocks[right] - stocks[left]
            if(highestProfit < tempProfit) {
                highestProfit = tempProfit
            }
        }
        right++
    }

    return highestProfit

};

export default bestTimeToBuyAndSellStock

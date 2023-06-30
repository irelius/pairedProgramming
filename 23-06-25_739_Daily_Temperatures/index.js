/**
 * @param {string} s
 * @return {boolean}
 */
var dailyTemp = function (temps) {
    // create output array

    // create a stack

    //


    let output = new Array(temps.length).fill(0)

    let stack = []

    for (let i = 0; i < temps.length; i++) {
        let iCurr = temps[i]

        for (let j = i + 1; j < temps.length; j++) {
            let jCurr = temps[j]

            if (jCurr > iCurr) {
                output[i] = j - i
                break
            }
        }
    }

    return output

};

export default dailyTemp

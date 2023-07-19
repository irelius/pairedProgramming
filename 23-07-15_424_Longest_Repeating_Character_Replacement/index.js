/**
 * @param {string} s
 * @return {boolean}
 */


var characterReplacement = function (s, k) {
    let l = 0;
    let r = 0;
    let dict = {}
    let mostCommon = 0;
    let highestLength = 0;

    while (r < s.length) {
        let curr = s[r]

        // creates a dictionary to keep track of elements in string
        if (dict[curr]) {
            dict[curr]++
        } else {
            dict[curr] = 1
        }

        // figures out the highest count of the most frequent character
        if (dict[curr] > mostCommon) {
            mostCommon = dict[curr]
        }

        // if the amount of non-most frequest character outnumbers k, the amount of changes available
        // move L pointer to right by one and decrement the count of the former left character
        if (r - l + 1 - mostCommon > k) {
            dict[s[l]]--
            l++
        }

        // then check if that substring is the longest
        if (highestLength < r - l + 1) {
            highestLength = r - l + 1
        }


        r++
    }

    return highestLength

};

export default characterReplacement

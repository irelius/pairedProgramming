/**
 * @param {string} s
 * @return {boolean}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let right = 0;
    let longest = 0

    let set = new Set()

    while (right < s.length) {

        if(set.has(s[right])) {
            set.delete(s[left])
            left++
        } else {
            set.add(s[right])
            right++
            longest = Math.max(longest, right - left)
        }
    }

    return longest
};

export default lengthOfLongestSubstring

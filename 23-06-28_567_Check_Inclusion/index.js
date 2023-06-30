/**
 * @param {string} s
 * @return {boolean}
 */
// var checkInclusion = function (s1, s2) {
//     let left = 0;
//     let right = 0;
//     let dict = {}

//     // create dictionary that contains all characters of s1 and keeps relative count
//     s1.split("").forEach(el => {
//         if (dict[el]) {
//             dict[el]++
//         } else {
//             dict[el] = 1
//         }
//     })


//     let addBackIn = []


//     while (right < s2.length) {
//         if (s2[right] in dict === false) {
//             addBackIn.forEach((el) => {
//                 dict[el]++
//             })
//             addBackIn = []
//             left = right
//         } else if(dict[s2[right]] === 0) {
//             while(dict[s2[right]] === 0) {
//                 let char = addBackIn.shift()
//                 dict[char]++
//             }
//         }

//         if (dict[s2[right]] > 0) {
//             dict[s2[right]]--
//             addBackIn.push(s2[right])
//         }

//         let values = Object.values(dict)
//         let answer = true
//         values.forEach(el => {
//             if (el !== 0) answer = false
//         })
//         if (answer) return true

//         right++
//     }

//     return false
// };

// export default checkInclusion


var checkInclusion = function (s1, s2) {
    let dict = {}
    s1.split("").forEach(el => {
        if (dict[el]) {
            dict[el]++
        } else {
            dict[el] = 1
        }
    })

    let left = 0;
    let right = 0;
    let chars = s1.length;
    let addBackIn = []

    while (right < s2.length) {
        if (s2[right] in dict === false) {
            addBackIn.forEach(el => {
                dict[el]++
                chars++
            })
            addBackIn = []
            left = right
        } else if (dict[s2[right]] === 0) {
            while (dict[s2[right]] === 0) {
                let shifted = addBackIn.shift()
                dict[shifted]++
                chars++
            }
        }

        if (dict[s2[right]] > 0) {
            dict[s2[right]]--
            addBackIn.push(s2[right])
            chars--
        }

        if (chars === 0) {
            return true
        }

        right++
    }

    return false


}

export default checkInclusion

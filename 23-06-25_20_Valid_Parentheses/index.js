/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let dict = {
        "(" : ")",
        "{" : "}",
        "[" : ']'
    }

    let stack = []


    s.split("").forEach(el => {
        if(el === dict[stack[stack.length - 1]]) {
            stack.pop()
        } else {
            stack.push(el)
        }
    })

    if(stack.length === 0) {
        return true
    }

    return false
};

export default isValid

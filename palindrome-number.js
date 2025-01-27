// @param {number} x
// @return {boolean}

// key takeaways : two-pointer method. hashmap caching for O(n) time complexity

function isPalindrome(x) {
    if (x < 0) return false
    const xString = x.toString()
    let pointL = 0
    let pointR = xString.length - 1
    while (pointL < pointR) {
        if (xString[pointL] !== xString[pointR]) {
            return false
        }
        pointL++
        pointR--
    }
    return true
}

const x = 1231

const result = isPalindrome(x)

console.log(result)
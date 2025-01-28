// @param {number} x
// @return {boolean}

// key takeaways : two-pointer method. hashmap caching for O(n) time complexity

function isPalindrome(x) {
    // 1. negative 2. ends with 0 but not 0
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false
    // compare first half and reversed second half
    let xReversed = 0
    while (x > xReversed) {
        xReversed = xReversed * 10 + x % 10
        x = Math.floor(x / 10)
        console.log(Math.floor(x), Math.floor(xReversed))
    }
    return x === xReversed || x === Math.floor(xReversed / 10)
}


const x = 12334
const result = isPalindrome(x)

console.log(result)
function romanToInt(s) {
    // if the following number is bigger, current number should be subtracted from the following.
    // if the following number is smaller, simply add following numbers
    const romanToIntMap = {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
    }
    const sUnder = s.toLowerCase()

    const indexToInt = (i) => {
        return romanToIntMap[sUnder[i]]
    }
    let sum = 0
    for (let i = 0; i < sUnder.length; i++) {
        if (indexToInt(i) < indexToInt(i + 1)) {
            sum -= indexToInt(i)
        }
        else {
            sum += indexToInt(i)
        }
    }
    return sum
}
const s = "MCMXCIV"
const result = romanToInt(s)
console.log(result)

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
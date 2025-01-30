function romanToInt(s) {
    // if the following number is bigger, current number should be subtracted from the following.
    // if the following number is smaller, simply add following numbers
    const letterToInt = (letter) => {
        switch (letter) {
            case "I": return 1;
            case "V": return 5;
            case "X": return 10;
            case "L": return 50;
            case "C": return 100;
            case "D": return 500;
            case "M": return 1000;
        }
    }
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (letterToInt(s[i]) < letterToInt(s[i + 1])) {
            sum -= letterToInt(s[i])
        }
        else {
            sum += letterToInt(s[i])
        }
    }
    return sum
}
const s = "MCMXCIV"
const result = romanToInt(s)
console.log(result)
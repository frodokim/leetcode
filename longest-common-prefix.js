// O(n*m)

function longestCommonPrefix(arrStr) {
    let currentLength
    let currentIndex
    // find the smallest word
    for (let i = 0; i < arrStr.length; i++) {
        if (!currentLength || arrStr[i].length < currentLength) {
            currentLength = arrStr[i].length
            currentIndex = i
        }
    }
    let smallestWord = arrStr[currentIndex]
    arrStr.splice(currentIndex, 1)
    while (smallestWord.length > 0) {
        console.log("smallestWord", smallestWord)
        console.log("arrStr", arrStr)
        arrStr = arrStr.filter((item) => { return !item.startsWith(smallestWord) })
        if (arrStr.length === 0) return smallestWord
        else smallestWord = smallestWord.substring(0, smallestWord.length - 1)
    }
    return smallestWord
}

const arrStr = ["flower", "flow", "flight"]
const result = longestCommonPrefix(arrStr)
console.log("result", result)
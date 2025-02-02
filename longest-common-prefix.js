// original answer : O(n*m)
// .filter creates new arrays -> extra memory useage

function longestCommonPrefix(arrStr) {
    let prefix = arrStr[0]
    let prefixLength = prefix.length

    for (let i = 1; i < arrStr.length; i++) { // O(n)
        while (prefix !== arrStr[i].substring(0, prefixLength)) { // O(m)
            prefixLength--
            if (prefixLength === 0) return ""
            prefix = prefix.substring(0, prefixLength)
        }
    }
    return prefix
}

const arrStr = ["flower", "flow", "flight"]
const result = longestCommonPrefix(arrStr)
console.log("result", result)
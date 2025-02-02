function isValidParentheses(strParentheses) {
    let i = 0
    let arrOpenIndex = []
    while (i < strParentheses.length) {
        switch (strParentheses[i]) {
            case ')': if (i - 1 < 0 || strParentheses[arrOpenIndex.pop()] !== '(') return false; break
            case ']': if (i - 1 < 0 || strParentheses[arrOpenIndex.pop()] !== '[') return false; break
            case '}': if (i - 1 < 0 || strParentheses[arrOpenIndex.pop()] !== '{') return false; break
            default: if (i === strParentheses.length - 1) return false; arrOpenIndex.push(i); break;
        }
        i++
    }
    return true
}
const strParentheses = "(){[)}()"
const result = isValidParentheses(strParentheses)
console.log(result)

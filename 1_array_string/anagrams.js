const anagrams = (s, t) => {
    const count = {}
    for (const char of s) {
        if (count[char] !== undefined) {
            count[char]++
        } else {
            count[char] = 1
        }
    }
    for (const char of t) {
        if (count[char] === undefined || count[char] === 0) {
            return false
        } else {
            count[char]--
        }
    }
    return true
}
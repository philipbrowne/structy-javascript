const mostFrequentChar = (s) => {
    const count = {}
    for (const char of s) {
        if (count[char] !== undefined) {
            count[char]++
        } else {
            count[char] = 1
        }
    }
    let best = null
    for (const char of s) {
        if (best === null || count[char] > count[best]) {
            best = char
        }
    }
    return best
}
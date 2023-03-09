const uncompress = (s) => {
    const res = []
    let i = 0
    let j = 0
    const numbers = "0123456789"
    while (j < s.length) {
        if (numbers.includes(s[j])) j++
        else {
            const num = s.slice(i, j)
            for (let n = 0; n < num; n++) {
                res.push(s[j])
            }
            j++
            i = j
        }
    }
    return res.join("")
}
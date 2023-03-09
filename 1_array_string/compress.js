const compress = (s) => {
    const res = []
    let i = 0
    let j = 0
    while (j < s.length) {
        if (s[i] === s[j]) j++
        else {
            count = Number(j - i)
            if (count === 1) {
                res.push(s[i])
            } else {
                res.push(String(count), s[i])
            }
            j ++
            i = j
        }
    }
    return res.join("")
}
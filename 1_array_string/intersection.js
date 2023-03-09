const intersection = (a, b) => {
    const setA = new Set(a)
    const res = []
    for (const el of b) {
        if (setA.has(el)) res.push(el)
    }
    return res
}
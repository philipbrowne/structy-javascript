const pairProduct = (numbers, target) => {
    const previous = {}
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i]
        const compliment = target / num
        if (previous[compliment] !== undefined) {
            return [previous[compliment], i]
        }
        previous[num] = i
    }
    return []
}
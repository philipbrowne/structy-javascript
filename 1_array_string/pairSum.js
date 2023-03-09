const pairSum = (numbers, target) => {
    const previous = {}
    for (let i = 0; i < numbers.length; i ++) {
        const compliment = target - numbers[i]
        if (previous[compliment] !== undefined) {
            return [i, previous[compliment]]
        }
        previous[numbers[i]] = i
    }
    return []
}                                                                                                                                                                                                                                                                                                                                           
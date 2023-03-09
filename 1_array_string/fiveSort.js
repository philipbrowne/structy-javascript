const fiveSort = (nums) => {
    let i = 0
    let j = nums.length - 1
    while (i < j) {
        if (nums[j] === 5) {
            j--
        } else if (nums[i] === 5) {
            const replacement = nums[j]
            nums[j] = 5
            nums[i] = replacement
        } else {
            i++
        }
    }
    return nums
}
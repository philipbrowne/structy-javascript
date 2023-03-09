class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// Iterative Approach
const longestStreak = (head) => {
    if (head === null) return 0
    let longest = 0
    let streak = 0
    let current = head
    let match = current.val
    while (current !== null) {
        if (current.val == match) {
            streak ++
        } else {
            streak = 1
            match = current.val 
        }
        if (streak > longest) longest = streak
        current = current.next
    }
    return longest
}

// Recursive Approach
const longestStreakRecursive = (head, prev=null, streak=0, longest=0) => {
    if (streak > longest) longest = streak
    if (head === null) return longest
    if (prev === null || head.val === prev) {
        return longestStreakRecursive(head.next, head.val, streak+1, longest)
    } else {
        return longestStreakRecursive(head.next, head.val, 1, longest)
    }
}
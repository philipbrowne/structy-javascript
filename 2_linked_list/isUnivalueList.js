class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// Iterative
const isUnivalueListIterative = (head) => {
    if (head === null) return false
    const value = head.val
    let current = head
    while (current !== null) {
        if (current.val !== value) return false
        current = current.next
    }
    return true
}

// Recursive
const isUnivalueList = (head, prev=null) => {
    if (head === null) return true
    else if (prev === null || head.val === prev) {
        return isUnivalueList(head.next, head.val)
    } else {
        return false
    }
}
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const linkedListFindIterative = (head, target) => {
    if (head === null) return false
    let current = head
    while (current !== null) {
        if (current.val === target) return true
    }
    return false
}

const linkedListFind = (head, target) => {
    if (head === null) return false
    if (head.val === target) return true
    return linkedListFind(head.next, target)
}
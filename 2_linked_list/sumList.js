class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const sumListIterative = (head) => {
    let sum = 0
    let current = head
    while (current !== null) {
        sum += current.val
        current = current.next
    }
    return sum
}

const sumList = (head) => {
    if (head === null) return 0
    return head.val + sumList(head.next)
}
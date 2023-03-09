class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const reverseListIterative = (head) => {
    let current = head
    let prev = null
    while (current != null) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

const reverseList = (head, prev=null) => {
    if (head === null) return prev
    const next = head.next
    head.next = prev
    prev = head
    return reverseList(next, prev)
}
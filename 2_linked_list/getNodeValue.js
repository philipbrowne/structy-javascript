class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const getNodeIterative = (head, idx) => {
    if (head === null) return null
    let count = 0
    let current = head
    while (current !== null) {
        if (count == idx) return current.val
        count++
        current = current.next
    }
    return null
}

const getNodeValue = (head, idx) => {
    if (head === null) return null
    if (idx === 0) return head.val
    return getNodeValue(head.next, idx-1)
}
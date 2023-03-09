class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const linkedListValuesIterative = (head) => {
    if (head === null) return []
    const res = []
    let current = head
    while (current !== null) {
        res.push(current.val)
        current = current.next
    }
    return res
}

const linkedListValues = (head, res=[]) => {
    if (head === null) return res
    res.push(head.val)
    return linkedListValues(head.next, res)
}
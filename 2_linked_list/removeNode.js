class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

const removeNodeIterative = (head, target) => {
    if (head === null) return null
    if (head.val === target) return head.next
    let current = head
    let previous = null
    while (current !== null) {
        if (current.val === target) {
            const next = current.next
            prev.next = next
            break
        }
        prev = current
        current = current.next
    }
    return head
}

const removeNode = (head, target) => {
    if (head === null) return null
    if (head.val === target) return head.next
    head.next = removeNode(head.next, target)
    return head
}
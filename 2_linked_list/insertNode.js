class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

const insertNodeIterative = (head, value, index) => {
    if (head === null) return null
    if (index === 0) {
        const newNode = new Node(value)
        newNode.next = head
        return newNode
    }
    let current = head
    let count = 0
    let prev = null
    while (current !== null) {
        if (index === count) {
            const newNode = new Node(value)
            newNode.next = current
            prev.next = newNode
        }
        count++
        prev = current
        current = current.next
    }
    if (count === index) prev.next = new Node(value)
    return head
}

const insertNode = (head, value, index, count=0) => {
    if (index === 0) {
        const newNode = new Node(value)
        newNode.next = head
        return newNode
    }
    if (head === null) return null
    if (index === count) {
        const next = head.next
        const newNode = new Node(value)
        head.next = newNode
        newNode.next = next
    }
    head.next = insertNode(head.next, value, index-1)
    return head
}
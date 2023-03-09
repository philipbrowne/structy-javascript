class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

const createLinkedListIterative = (values) => {
    if (!values) return null
    const head = new Node(null)
    let tail = head
    for (const value of values) {
        tail.next = new Node(value)
        tail = tail.next 
    }
    return head.next
} 

const createLinkedList = (values, i=0) => {
    if (i >= values.length) return null
    const result = new Node(values[i])
    result.next = createLinkedList(values, i+1)
    return result
}
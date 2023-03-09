class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

// Iterative Approach
const addListsIterative = (head1, head2) => {
    const dummy = new Node(null)
    let tail = dummy
    let current1 = head1
    let current2 = head2
    let carry = 0
    while (current1 !== null || current2 !== null || carry === 1) {
        const num1 = current1 === null ? 0 : current1.val
        const num2 = current2 === null ? 0 : current2.val
        const sum = num1 + num2 + carry
        const digit = sum % 10
        carry = sum > 9 ? 1 : 0
        tail.next = new Node(digit)
        tail = tail.next
        if (current1 !== null) {
            current1 = current1.next
        } 
        if (current2 !== null) {
            current2 = current2.next
        }
    }
    return dummy.next
}

// Recursive Approach
const addLists = (head1, head2, carry=0) => {
    if (head1 === null && head2 === null && carry === 0) {
        return null
    }
    const num1 = head1 === null ? 0 : head1.val
    const num2 = head2 === null ? 0 : head2.val
    const sum = num1 + num2 + carry
    const digit = sum % 10
    carry = sum > 9 ? 1 : 0
    const result = new Node(digit)
    const next1 = head1 !== null ? head1.next : null
    const next2 = head2 !== null ? head2.next : null
    result.next = addLists(next1, next2, carry)
    return result
}
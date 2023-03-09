class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const zipperListIterative = (head1, head2) => {
    const dummy = new Node(null)
    let current1 = head1
    let current2 = head2
    let tail = dummy
    let count = 0
    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            tail.next = current1
            tail = tail.next
            current1 = current1.next
        } else {
            tail.next = current2
            tail = tail.next
            current2 = current2.next
        }
        count++
    }
    if (current1 !== null) {
        tail.next = current1
    }
    if (current2 !== null) {
        tail.next = current2
    }
    return dummy.next
}

const zipperLists = (head1, head2) => {
    if (head1 === null && head2 === null) return null
    if (head1 === null) return head2
    if (head2 === null) return head1
    const next1 = head1.next
    const next2 = head2.next
    head1.next = head2
    head2.next = zipperLists(next1, next2)
    return head1
}
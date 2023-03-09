class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

const bottomRightValue = (root) => {
    if (root === null) return null
    let current = null
    const queue = [root]
    while (queue.length > 0) {
        current = queue.shift()
        if (current.left !== null) queue.push(current.left)
        if (current.right !== null) queue.push(current.right)
    }
    return current.val
}
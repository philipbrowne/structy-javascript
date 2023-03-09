class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Depth First Iterative
const treeValueCountDFI = (root, target) => {
    if (root === null) return 0
    let count = 0
    const stack = [root]
    while (stack.length > 0) {
        const node = stack.pop()
        if (node.val === target) {
            count ++
        }
        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left !== null) {
            stack.push(node.left)
        }
    }
    return count
}

// Depth First Recursive
const treeValueCount = (root, target) => {
    if (root === null) return 0
    let count = 0
    if (root.val === target) count ++
    const countLeft = treeValueCount(root.left, target)
    const countRight = treeValueCount(root.right, target)
    return count + countLeft + countRight
}

// Breadth First Traversal
const treeValueCountBF = (root, target) => {
    if (root === null) return 0
    let count = 0
    const queue = [root]
    while (queue.length > 0) {
        const current = stack.shift()
        if (current.val === target) {
            count ++
        }
        if (current.left !== null) {
            queue.push(current.left)
        }
        if (current.right != null) {
            queue.push(current.right)
        }
    }
    return count
} 
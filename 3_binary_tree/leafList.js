class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

const leafListIterative = (root) => {
    if (root === null) return []
    const leafs = []
    const stack = [root]
    while (stack.length > 0) {
        const current = stack.pop()
        if (current.right !== null) stack.push(current.right)
        if (current.left !== null) stack.push(current.left)
        if (current.right === null && current.left === null) leafs.push(current.val)
    }
    return leafs
}

const leafList = (root) => {
    const leafs = []
    leafListHelper(root, leafs)
    return leafs
}

const leafListHelper = (root, leafs) => {
    if (root === null) return
    if (root.left === null && root.right === null) leafs.push(root.val)
    leafListHelper(root.left, leafs)
    leafListHelper(root.right, leafs)
}
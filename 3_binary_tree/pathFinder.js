class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

// Slow Recursive
// const pathFinder = (root, target) => {
//     if (root === null) return null
//     if (root.val === target) return [root]
//     const leftValues = pathFinder(root.left, target)
//     if (leftValues !== null) {
//         return [root.val, ...leftValues]
//     }
//     const rightValues = pathFinder(root.right, target)
//     if (rightValues !== null) {
//         return [root.val, ...rightValues]
//     }
//     return null
// }

// Optimized Recursive with Helper
const pathFinder = (root, target) => {
    const result = treePathHelper(root, target)
    if (result === null) {
        return null
    } else {
        return result.reverse()
    }
}

const treePathHelper = (root, target) => {
    if (root === null) return null
    if (root.val === target) return [root.val]
    const leftValues = treePathHelper(root.left, target)
    if (leftValues !== null) {
        leftValues.push(root.val)
        return leftValues
    }
    const rightValues = treePathHelper(root.right, target)
    if (rightValues!== null) {
        rightValues.push(root.val)
        return rightValues
    }
    return null
}
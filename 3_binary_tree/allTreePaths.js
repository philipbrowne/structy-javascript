class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

const allTreePaths = (root) => {
    if (root === null) return []
    if (root.left === null && root.right === null) return [[root.val]]
    const res = []
    const leftPaths = allTreePaths(root.left)
    for (const path in leftPaths) {
        res.push(root.val, ...path)
    }
    const rightPaths = allTreePaths(root.right)
    for (const path in rightPaths) {
        res.push(root.val, ...path)
    }
    return res
}
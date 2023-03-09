class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

const howHigh = (node) => {
    if (node === null) return -1
    const leftHeight = howHigh(node.left)
    const rightHeight = howHigh(node.right)
    return 1 + Math.max(leftHeight, rightHeight)
}
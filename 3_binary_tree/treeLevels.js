class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

// Depth First Iterative
const treeLevelsDFI = (root) => {
    if (root === null) return []
    const levels = []
    const stack = [{
        node: root,
        level: 0
    }]
    while (stack.length > 0) {
        const current = stack.pop()
        if (levels.length <= current.level) {
            levels.push([])
        }
        levels[current.level].push(current.node.val)
        if (current.node.right !== null) {
            stack.push({
                node: current.node.right,
                level: current.level + 1
            })
        }
        if (current.node.left !== null) {
            stack.push({
                node: current.node.left,
                level: current.level + 1
            })
        }
    }
    return levels
}

// Breadth First Iterative
const treeLevelsBFI = (root) => {
    if (root === null) return []
    const levels = []
    const queue = [{
        node: root,
        level: 0
    }]
    while (queue.length > 0) {
        const current = queue.shift()
        if (levels.length <= current.level) {
            levels.push([])
        }
        levels[current.level].push(current.node.val)
        if (current.node.left !== null) {
            queue.push({
                node: current.node.left,
                level: current.level + 1
            })
        }
        if (current.node.right !== null) {
            queue.push({
                node: current.node.right,
                level: current.level + 1
            })
        }        
    }
    return levels
}

// Recursive
const treeLevels = (root) => {
    const levels = []
    treeLevelsHelper(root, levels, 0)
    return levels
}

const treeLevelsHelper = (root, levels, levelNum) => {
    if (root === null) return
    if (levels.length <= levelNum) {
        levels.push([])
    }
    levels[levelNum].push(root.val)
    treeLevelsHelper(root.left, levels, levelNum+1)
    treeLevelsHelper(root.right, levels, levelNum+1)
}
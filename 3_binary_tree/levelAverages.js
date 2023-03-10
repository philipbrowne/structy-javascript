class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

// Recursive
const levelAverages = (root) => {
    const levels = []
    treeLevelsHelper(root, levels, 0)
    const averages = []
    for (const level of levels) {
        averages.push(avg(level))
    }
    return averages
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

const avg = (array) => {
    let sum = 0;
    for (let num of array) {
      sum += num;
    }
    return sum / array.length;
  };
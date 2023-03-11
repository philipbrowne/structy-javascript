const hasPathDFI = (graph, src, dst) => {
    if (graph[src] === undefined || graph[dst] === undefined) {
        return false
    }
    const stack = [src]
    while (stack.length > 0) {
        const current = stack.pop()
        if (current === dst) {
            return true
        }
        for (const neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
    return false
}

const hasPathBFI = (graph, src, dst) => {
    if (graph[src] === undefined || graph[dst] === undefined) {
        return false
    }
    const queue = [src]
    while (queue.length > 0) {
        const current = queue.shift()
        if (current === dst) {
            return true
        }
        for (const neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    return false
}

const hasPath = (graph, src, dst) => {
    if (graph[src] === undefined || graph[dst] === undefined) {
        return false
    }
    if (src === dst) {
        return true
    }
    for (const neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst)) {
            return true
        }
    }
    return false
}
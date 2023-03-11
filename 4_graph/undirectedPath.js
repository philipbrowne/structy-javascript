const buildGraph = (edges) => {
    const graph = {}
    for (const edge of edges) {
        const [a,b] = edge
        if (graph[a] === undefined) {
            graph[a] = []
        }
        graph[a].push(b)
        if (graph[b] === undefined) {
            graph[b] = []
        }
        graph[b].push(a)
    }
    return graph
}

const undirectedPathDFI = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    const stack = [nodeA]
    const visited = new Set()
    while (stack.length > 0) {
        const current = stack.pop()
        if (current === nodeB) return true
        visited.add(current)
        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor)
            }
        }
    }
    return false
}

const undirectedPathBFI = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    const queue = [nodeA]
    const visited = new Set()
    while (queue.length > 0) {
        const current = queue.shift()
        if (current === nodeB) return true
        visited.add(current)
        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor)
            }
        }
    }
    return false
}

const undirectedPathRecursive = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    return hasPath(graph, nodeA, nodeB, new Set())
}

const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true
    if (visited.has(src)) return false
    visited.add(src)
    for (const neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited)) return true
    }
    return false
}
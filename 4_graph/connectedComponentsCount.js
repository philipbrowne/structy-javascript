const connectedComponentsCount = (graph) => {
    const visited = new Set()
    let count = 0
    for (const node in graph) {
        if (explore(graph, node, visited)) count++
    }
    return count
}

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false
    visited.add(String(current))
    for (const neighbor of graph[current]) {
        explore(graph, neighbor, visited)
    }
    return true
}
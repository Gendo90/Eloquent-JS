exports.buildGraph = function(arr) {
    let graph = {};
    for (let item of arr) {
        if(item[0] in graph) {
            graph[item[0]].push(item[1])
        }
        else {
            graph[item[0]] = [item[1]]
        }
        if(item[1] in graph) {
            graph[item[1]].push(item[0])
        }
        else {
            graph[item[1]] = [item[0]]
        }
    }
    return graph;
}

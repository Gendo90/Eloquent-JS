const graphBuilder = require("./graph");

var roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function convertRoadFormat(arr) {
    let output_arr = [];
    for (let item of arr) {
        [from, to] = item.split("-");
        output_arr.push([from, to])
    }
    return output_arr;
}

let graph_input_arr = convertRoadFormat(roads)
// console.log(graphBuilder.buildGraph(graph_input_arr))
exports.roadGraph = graph_input_arr

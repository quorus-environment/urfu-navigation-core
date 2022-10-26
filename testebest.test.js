const breathSearch = require('./algorithms/BreadthSearch');

const hyi = require("./graph.js");

let graph = [];
graph.push(new  hyi.Graph(new hyi.Point({}, {}, 1, false),
    [new hyi.Point({}, {}, 2, false),
        new hyi.Point({}, {}, 3, false)]))


test('Pizda', ()=> {
    expect(breathSearch(graph, "1", "3")).toStrictEqual([])
})
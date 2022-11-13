let routes = new Map();
let queue = [];

function GetResultRoute(startPointID, endPointID){
    let currentId = endPointID;
    const resultRoute = [currentId];
    while (currentId !== startPointID){
        currentId = routes.get(currentId);
        resultRoute.unshift(currentId);
    }
    return resultRoute;
}


function BreadthSearch(graph, startPointID, endPointID){
    if (queue.length === 0){
        return queue;
    }
    let currentPlace = graph[queue.shift()];
    if (currentPlace.isFilled){
        BreadthSearch(graph, startPointID, endPointID)
    }
    currentPlace.isFilled = true;
    if (currentPlace.id === endPointID){
        return GetResultRoute(startPointID, endPointID);
    }
    currentPlace.neighbors.forEach(id => {
        const neightbourIndex = graph.findIndex(element => element.id === id);
        const neightbour = graph[neightbourIndex];
        if (neightbour.isFilled === false){
            routes.set(neightbour.id, currentPlace.id);
            queue.push(neightbourIndex);
        }
    });
    return BreadthSearch(graph, startPointID, endPointID);
}

// оболочка, в которую можно добавить какую-то доп логику, например,
// опитимизировать и отобрать нужные графы  - мини middleware
// graph - весь граф института (пока что без оптимизации)
// можно попробовать скопировать graph, чтоб каждый раз не передавать его
function Initialization(graph, startPointID, endPointID) {
    routes = new Map();
    queue = [];
    if (startPointID === endPointID){
        return queue;
    }
    queue.push(graph.findIndex(item => item.id === startPointID));
    return BreadthSearch(graph, startPointID, endPointID);
}

// module.exports = Initialization

let graph = [
    {
        "id": "РИ-101",
        "destination": "auditorium",
        "height": 25,
        "isFilled": false,
        "neighbors": ["cor_1"],
        "direction": "bottom",
        "points": [
            425,
            450,
            425,
            475
        ]
    },
    {
        "id": "РИ-102",
        "destination": "auditorium",
        "height": 25,
        "isFilled": false,
        "neighbors": ["cor_2"],
        "direction": "bottom",
        "points": [
            575,
            450,
            575,
            475
        ]
    },
    {
        "id": "РИ-103",
        "destination": "auditorium",
        "height": 25,
        "isFilled": false,
        "neighbors": ["cor_3"],
        "direction": "bottom",
        "points": [
            725,
            450,
            725,
            475
        ]
    },
    {
        "id": "РИ-105",
        "destination": "auditorium",
        "height": 25,
        "isFilled": false,
        "neighbors": ["cor_1"],
        "direction": "top",
        "points": [
            425,
            500,
            425,
            475
        ]
    },
    {
        "id": "РИ-106",
        "destination": "auditorium",
        "height": 25,
        "isFilled": false,
        "neighbors": ["cor_2"],
        "direction": "top",
        "points": [
            575,
            500,
            575,
            475
        ]
    },
    {
        "id": "РИ-107",
        "destination": "auditorium",
        "height": 25,
        "isFilled": false,
        "neighbors": ["cor_3"],
        "direction": "top",
        "points": [
            725,
            500,
            725,
            475
        ]
    },
    {
        "id": "cor_1",
        "destination": "corridor",
        "height": 150,
        "isFilled": false,
        "neighbors": ["РИ-101", "РИ-105", "cor_2"],
        "direction": "right",
        "points": [
            425,
            475,
            575,
            475
        ]
    },
    {
        "id": "cor_2",
        "destination": "corridor",
        "height": 150,
        "isFilled": false,
        "neighbors": ["РИ-102", "РИ-106", "cor_1", "cor_3"],
        "direction": "right",
        "points": [
            575,
            475,
            725,
            475
        ]
    },
    {
        "id": "cor_3",
        "destination": "corridor",
        "height": 150,
        "isFilled": false,
        "neighbors": ["РИ-103", "РИ-107", "cor_2"],
        "direction": "right",
        "points": [
            725,
            475,
            875,
            475
        ]
    }
]

console.log(Initialization(graph, "РИ-101", "РИ-105"))







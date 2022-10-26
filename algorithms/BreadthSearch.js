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
        return GetResultRoute(routes, startPointID, endPointID);
    }
    currentPlace.neighbours.forEach(id => {
        const neightbourIndex = graph.findIndex(element => element.id === id);
        const neightbour = graph[neightbourIndex];
        if (neightbour.isFilled === false){
            routes.set(neightbour.id, currentPlace.id);
            queue.push(neightbourIndex);
        }
    });
    BreadthSearch(graph, startPointID, endPointID);
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

module.exports = Initialization





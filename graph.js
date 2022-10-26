class Point {
    coordinates;
    destination;
    id;
    isFilled;
    constructor(coordinates, destination, id, isFilled) {
        this.coordinates = coordinates;
        this.destination = destination;
        this.id = id;
        this.isFilled = isFilled;
    }

    get coordinates () {
        return this.coordinates;
    }

    set coordinates (coordinates) {
        this.coordinates = coordinates;
    }

    get destination () {
        return this.destination;
    }

    set destination (destination) {
        this.destination = destination;
    }

    get id () {
        return this.id;
    }

    set id (id) {
        this.id = id;
    }

    get isFilled () {
        return this.isFilled;
    }

    set isFilled (isFilled) {
        this.isFilled = isFilled;
    }
}

class Graph {
    neighbours
    node
    constructor(node, neighbours) {
        this.neighbours = neighbours;
        this.node = node;
    }

    addNeighbour (node) {
        this.neighbours.push(node);
    }
}


module.exports.Graph = Graph;
module.exports.Point = Point;
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK','OKC'],
    ['JFK','HEL'],
    ['JFK','LOS'],
    ['MEX','LAX'],
    ['MEX','BKK'],
    ['MEX','LIM'],
    ['MEX','EZE'],
    ['LIM','BKK']
]

//The graph
const adjacencyList = new Map();

//Add node
const addNode = (airport) => {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}
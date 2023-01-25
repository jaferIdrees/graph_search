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

// Create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

// console.log(adjacencyList);
const bfs = (start) => {
    const visited = new Set();
    const queue = [start];
    while (queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);
        for (const destination of destinations){
            console.log(destination);
            if (destination === 'BKK'){
                console.log('found it!');
            }
            if (!visited.has(destination)){
                visited.add(destination);
                queue.push(destination)
            }
        }
    }
}

bfs('PHX');
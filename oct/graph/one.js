// graph Data Structure
// A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.
// Graphs are used to solve many real-world problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name
// Graphs are also used in Google Maps. Each location is represented with a vertex(or node). Each node is a structure and contains information like location id, name, latitude and longitude.

// Graphs are also used in file system optimizations. For example, let us consider we have a file system that contains a lot of files and folders. The files and folders are arranged in a tree structure. Now suppose you issued a command to delete a folder that contains a lot of files and folders. To delete the folder, first, all the files and folders inside the folder should be found and then deleted. If one uses tree data structure for this purpose then it takes O(n) time where n is the number of files and folders. To make it O(Log n), we can use Graphs.

// implementation of graph data structure

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  // findNode
    findNode(vertex) {
        return this.adjacencyList[vertex];
    }
}

const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Tokyo", "Dallas");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");

// console.log(g);
// console.log(g.findNode("Tokyo"));
// console.log(g.findNode("Dallas"));
// console.log(g.findNode("Aspen"));

// console.log(g.findNode("Los Angeles"));
// console.log(g.findNode("Hong Kong"));
Graph.prototype.depthFirstRecursive = function (start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                return dfs(neighbor);
            }
        });
    })(start);
    return result;
};
// console.log(g.depthFirstRecursive("Tokyo"));

Graph.prototype.depthFirstIterative = function (start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
        console.log(stack);
        currentVertex = stack.pop();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor);
            }
        });
    }
    return result;
};
// console.log(g.depthFirstIterative("Tokyo"));

Graph.prototype.breadthFirstSearch = function (start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
        console.log(queue);
        currentVertex = queue.shift();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
};
// console.log(g.breadthFirstSearch("Tokyo"));



// Graph Traversal

// Graph traversal is the process of visiting (checking and/or updating) each vertex in a graph, exactly once. Such traversals are classified by the order in which the vertices are visited. The order may be defined by an explicit stack or queue or implicitly by the recursion stack.

// Graphs are implemented using either adjacency matrix or adjacency list.

// Adjacency Matrix
// An adjacency matrix is a 2D array of size V x V where V is the number of vertices in a graph. Let the 2D array be adj[][], a slot adj[i][j] = 1 indicates that there is an edge from vertex i to vertex j. Adjacency matrix for undirected graph is always symmetric. Adjacency Matrix is also used to represent weighted graphs. If adj[i][j] = w, then there is an edge from vertex i to vertex j with weight w.



// Adjacency List
// An adjacency list is an array of linked lists. Size of the array is equal to the number of vertices. Let the array be array[]. An entry array[i] represents the linked list of vertices adjacent to the ith vertex. This representation can also be used to represent a weighted graph. The weights of edges can be represented as lists of pairs. Following is adjacency list representation of the above graph.

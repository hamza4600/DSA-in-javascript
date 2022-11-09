// Chapter 10
// Binary Search Tree
// Graph
// Sorting Algorithms

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySeratchTree {
    constructor() {
        this.head = null;
    }
    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.insertNode(this.head, newNode); // we have to tranverse the tree to find the right place to insert the node
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    find(data) { // for in all the tree
        let current = this.head;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    remove(data) {
        this.head = this.removeNode(this.head, data);
    }
    removeNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data === node.data) {
            // node has no children
            if (node.left === null && node.right === null) {
                return null;
            }
            // node has no left child
            if (node.left === null) {
                return node.right;
            }
            // node has no right child
            if (node.right === null) {
                return node.left;
            }
            // node has two children
            let tempNode = this.getMin(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        }
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
    getMin(node) {
        if (node.left === null) {
            return node;
        }
        else {
            return this.getMin(node.left);
        }
    }
    getMax(node) {
        if (node.right === null) {
            return node;
        }
        else {
            return this.getMax(node.right);
        }
    }

}

// let bst = new BinarySeratchTree();
// bst.add(10);
// bst.add(5);
// bst.add(15);
// bst.add(3);
// bst.add(7);
// bst.add(12);
// bst.add(17);
// bst.add(1);
// bst.add(4);

// // console.log(bst.find(10));
// // bst.remove(10);
// console.log(bst.find(10));

// Heap are also a tree data structure but they are different from BST in the way that they are ordered in a specific way and they are used to implement priority queues and sorting algorithms like heapsort. 


// Chapter 11
// Graphs

class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2) {
        // undirected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
    // Depth First Search
    dfsRecursive(start) { // shows the path of the search
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacentList;
        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);
        return result;
    }
    // Briath First Search
    bfs(start) {
        let queue = [start];
        let result = [];
        let visited = {};
        let currentVertex;
        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacentList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}

let myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");

myGraph.addEdge("0", "1");
myGraph.addEdge("0", "2");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "3");

myGraph.showConnections();

console.log("D F S", myGraph.dfsRecursive("0"));

// console.log(myGraph.dfsIterative("0"));

console.log(myGraph.bfs("0"));


// Sorting Alogorithms 

// Bubble Sort
function BubbleSort(array) {

    let flag = false;
    for (var i = 0; i <= array.length - 1; i++) {
        // Last i elements are already in place
        flag = false
        for (var j = 0; j < (array.length - i - 1); j++) {

            // Comparing two adjacent numbers 
            // and see if first is greater than second
            if (array[j] > array[j + 1]) {

                // Swap them if the condition is true 
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp;
                flag = true
            }
        }
        if (!flag) {
            return array
        }
    }
    // Print the sorted array
    console.log(array);
}

// console.log(BubbleSort([5, 3, 1, 4, 2]));

// Selection Sort
function SelectionSort(arr) {
    let len = arr.length;
    let min;
    for (let i = 0; i < len; i++) {
        min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

// console.log(SelectionSort([5, 3, 1, 4, 2]));

// Insertion Sort
function InsertionSort(arr) {
    let len = arr.length;
    let i, j, temp;
    for (i = 1; i < len; i++) {
        j = i;
        temp = arr[i];
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];    
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

// console.log(InsertionSort([5, 3, 1, 4, 2]));

// Merge Sort
function MergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return Merge(MergeSort(left), MergeSort(right));
}

function Merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}

// console.log(MergeSort([5, 3, 1, 4, 2]));


// Quick Sort is best for sorting large arrays
function QuickSort(arr) {
    if (arr.length === 0) {
        return [];
    }
    let left = [];
    let right = [];
    let pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return QuickSort(left).concat(pivot, QuickSort(right));
}

console.log("Quick Sort", QuickSort([5, 3, 1, 4, 2]));



// Finonci Series using Dynamic Programming

function fibRecusion(n) {
    let memo = [];
    if (n <= 1) {
        return n;
    }
    if (memo[n] != undefined) {
        return memo[n];
    }
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

console.log(fibRecusion(100));  // time take in seconds is  huge

function fib(n) {
    let value = [0, 1];
    for (let i = 2; i <= n; i++) {
        value[i] = value[i - 1] + value[i - 2];
    }
    return value[n];
}

// console.log(fib(100))

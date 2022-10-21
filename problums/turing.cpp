// correct implementation of function search in binary tree

// public Tree Search  (Tree root , int key) {
//     if (root == null) return null;
//     if (root.key == key) return root;
//     if (root.key > key) return Search(root.left, key);
//     else return Search(root.right, key);
// }
// auxiliary space complexity of two for loops
// is O(n) and O(n) for the recursive call stack

// correct pseduc code of dijkstra algorithm
// if(T[w].known == false && T[w].dist > T[v].dist + c(v,w))
// T[w].dist = T[v].dist + c(v,w)
// T[w].path = v
// T[w].known = true)

// coding question
// correct implementation of Bellman Ford algorithm
// for(int i = 0; i < n; i++) {
//     for(int j = 0; j < m; j++) {
//         if(T[j].dist > T[i].dist + c(i,j)) {
//             T[j].dist = T[i].dist + c(i,j);
//             T[j].path = i;
//         }
//     }
// }


// calculate smallest distance between each pair points 
// find pair with smallest distance
// correct implementation of brute force algorithm

// correct implementation of merge sort
// if (left < right) {
//     int mid = (left + right) / 2;
//     mergeSort(left, mid);
//     mergeSort(mid + 1, right);
// 

// best data structure for searching word in dictionary ?
// trie


// counting sort 
// correct implementation of counting sort
function countSort (arr, K ){
    let count = new Array(K);
    for(let i = 0; i < K; i++) {
        count[i] = 0;
    }
    for(let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    let index = 0;
    for(let i = 0; i < K; i++) {
        for(let j = 0; j < count[i]; j++) {
            arr[index++] = i;
        }
    }
}
// transverse tree in Binara tree to a Breath First Searc
// select one
// correct implementation of BFS
function BFS (root) {
    let queue = new Queue();
    queue.enqueue(root);
    while(!queue.isEmpty()) {
        let node = queue.dequeue();
        visit(node);
        if(node.left != null) queue.enqueue(node.left);
        if(node.right != null) queue.enqueue(node.right);
    }
}   
// what is breath first search
// problum taht can be solved by backtracking methods
// one 
// queue prioroty are incorrect
// Each element of the queue is a pair (x, y) where x is the node and y is the distance of x from the root.

// data structure taht is not a balanced tree
// answer is hash table and hash map and 
// bubble sort
function bubbleSort (arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// quick sort
function quickSort (arr, left, right) {
    if(left < right) {
        let pivot = partition(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
}

// max heap 
// if we apply on node 2 what is new value of node 2
// new value of node will be 2 * 2 + 1 = 5

// Floyd Warshall algorithm
// do not use this algorithm for sparse graph

// correct implementation of Floyd Warshall algorithm
function FloydWarshall (graph) {
    let dist = new Array(graph.length);
    for(let i = 0; i < graph.length; i++) {
        dist[i] = new Array(graph.length);
        for(let j = 0; j < graph.length; j++) {
            dist[i][j] = graph[i][j];
        }
    }
    for(let k = 0; k < graph.length; k++) {
        for(let i = 0; i < graph.length; i++) {
            for(let j = 0; j < graph.length; j++) {
                if(dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
}

// best sorting algo if items are sorted
// answer is insertion sort
// find minumum spanning tree in graph
// answer is prim algorithm

// best algo for sorting an array of 100 items
// answer is insertion sort

// eqalint to depth first search
// answer is pre order traversal

// apllication of dequue
// answer is double ended queue
// answer is double ended queue
// can be used to implement stack and queue

// Prim algorithm  if we start from vertex a
// answer is a, b, c, d, e, f, g
// we have a , b , c and d
// answer is  what answer is 1

// shell Sort 
// while ( k >= span) {

    // what is a hash function
    // answer is a function that maps a key to a value

    // best algo for sorting array of 1 million items
    // answer is merge sort

    // worst ase for heap  remove a random node
    // answer is O(n)
    // Kruskal algorithm might produce  non minimal spanning tree
    // answer is true
    // can be efficatvilt immplement  using disjoint set
    // answer is true

    // in place merge sort 
    // how 
    // answer is merge sort


    // inplace merge sort


    // element can be added and deleted from both ends
    // answer is double ended queue
     and stack
     // and stack

     // best algo for partially sorted array
        // answer is insertion sort
        // answer is insertion sort 


        // quick sort 
        quicksort (arr , low , high) {
            if(low < high) {
                let pivot = partition(arr, low, high);
                quicksort(arr, low, pivot - 1);
                quicksort(arr, pivot + 1, high);
            }
        }

        // basic data structure for implementation  Breath First Search
        // answer is queue
        // selection sort correct implementation
        function selectionSort (arr) {
            for(let i = 0; i < arr.length; i++) {
                let min = i;
                for(let j = i + 1; j < arr.length; j++) {
                    if(arr[j] < arr[min]) {
                        min = j;
                    }
                }
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
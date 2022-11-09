// Tress
class Tree {
    constructor() {
        this.vertix = [];
        this.Map = {};
        this.edges = 0;
    }
    add(vertix) {
        this.vertix.push(vertix);
        this.Map[vertix] = [];
        this.edges++;
    }
    addEdges(node1, node2) {
        this.Map[node1].push(node2);
        this.Map[node2].push(node1);
    }
    brethFirstSearch(goal, root = this.vertix[0]) {
        let adject = this.Map;
        const queue = [];
        queue.push(root);

        const visited = [];
        visited[root] = true;

        while (queue.length) {
            let v = queue.shift();
            if (v === goal) {
                return true;
            }

            for (let i = 0; i < adject[v].length; i++) {
                if (!visited[adject[v][i]]) {
                    visited[adject[v][i]] = true;
                    queue.push(adject[v][i]);
                }
            }
        }
        return false;
    }
    depthFirstSearch(goal, root = this.vertix[0]) {
        let adject = this.Map;
        const stack = [];
        stack.push(root);

        const visited = [];
        visited[root] = true;

        while (stack.length) {
            let v = stack.pop();
            if (v === goal) {
                return true;
            }

            for (let i = 0; i < adject[v].length; i++) {
                if (!visited[adject[v][i]]) {
                    visited[adject[v][i]] = true;
                    stack.push(adject[v][i]);
                }
            }
        }
        return false;
    }

}

const myTree = new Tree();
myTree.add("A");
myTree.add("B");
myTree.add("C");
myTree.add("D");
myTree.add("E");

myTree.addEdges("A", "B");
myTree.addEdges("A", "C");
myTree.addEdges("B", "D");
myTree.addEdges("C", "E");


// console.log(myTree);

// console.log(myTree.brethFirstSearch("A"));



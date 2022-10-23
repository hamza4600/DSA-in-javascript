// Tree data structure
// A tree is a data structure that consists of nodes in a parent / child relationship.
// A tree data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.
//
// A tree data structure can also be defined abstractly as a whole, as a set of nodes connected by edges.
// A tree data structure may be defined as a graph G = (V, E) such that:
// V is a set of elements (called vertices or nodes) that are connected by edges (also called links or branches).
// E is a set of ordered pairs of vertices, called edges, arcs, or lines for an undirected graph or a set of ordered triples of vertices for a directed graph.
// A tree is a connected acyclic graph.
// A tree is a connected graph without cycles.

// Binary Tree
// A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.
// Binary trees are used to implement binary search trees, heaps, expression trees, and lists.

// Balanced and Un Balanced Binary Tree
// A binary tree is balanced if the height of the tree is O(Log n) where n is the number of nodes. For Example, AVL tree maintain O(Log n) height by making sure that the difference between heights of left and right subtrees is 1. Red Black trees maintain O(Log n) height by making sure that the number of Black nodes on every root to leaf paths are same and there are no adjacent red nodes. Balanced Binary Search trees are performance wise good as they provide O(log n) time for search, insert and delete.

// Tree
// A tree is a data structure that consists of nodes in a parent / child relationship.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  DFSInOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

let tree = new Tree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//      10
//   6     15
// 3  8      20

// BFS
// Breadth First Search
// It is a tree traversal algorithm that starts traversing the tree from root node and explores all the neighbouring nodes.
// Then, it selects the nearest node and explore all the unexplored nodes.
// The algorithm follows the same process for each of the nearest node until it finds the goal.
// It is also called Level Order Traversal.
// Time Complexity: O(n)
// Space Complexity: O(n)
console.log(tree.BFS());

// DFS
// Depth First Search
// It is a tree traversal algorithm that starts traversing the tree from root node and explores as far as possible along each branch before backtracking.
// It is also called PreOrder Traversal.
// Time Complexity: O(n)
// Space Complexity: O(n)
console.log(tree.DFSPreOrder());


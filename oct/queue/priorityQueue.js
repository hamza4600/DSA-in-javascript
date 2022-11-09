// Priority Queue
// items are added to the queue based on their priority and are server out of the queue based on their priority
// A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

// application
// 1. printing queue
// 2. background tasks
// 3. uploading resources
// 4. routing algorithms

// can be implelemted by using array , linkList or ,heap , binary search tree

// implementation using array
class PriotyQueueArray {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

// const pq = new PriotyQueueArray();
// pq.enqueue("common cold", 5);
// pq.enqueue("gunshot wound", 1);
// pq.enqueue("high fever", 4);
// pq.enqueue("broken arm", 2);
// pq.enqueue("glass in foot", 3);
// console.log(pq)
// console.log(pq.dequeue());

// implementation using linkList
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.first = null;
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        if (!this.first || priority < this.first.priority) {
            newNode.next = this.first;
            this.first = newNode;
        } else {
            let current = this.first;
            while (current.next && priority > current.next.priority) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        return this;
    }
    dequeue() {
        let temp = this.first;
        this.first = this.first.next;
        return temp;
    }
    // print
    print() {
        let current = this.first;
        while (current) {
            console.log(current.val, current.priority);
            current = current.next;
        }
    }
}

// const pqL = new PriorityQueue();
// pqL.enqueue("common cold", 5);
// pqL.enqueue("gunshot wound", 1);
// pqL.enqueue("high fever", 4);
// pqL.enqueue("broken arm", 2);
// pqL.enqueue("glass in foot", 3);
// pqL.print();
// console.log(pqL.dequeue());
// implementation using heap
class NodeH {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueueH {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new NodeH(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
         // add new element with priority to the end of the array
         // if two element having smae priority then add new element after the old element
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
    // print
    print() {
       for(var i = 0; i<this.values.length;i++){
           console.log(this.values[i].val,this.values[i].priority)
       }
    }
}

// const pqH = new PriorityQueueH();
// pqH.enqueue("common cold", 5);
// pqH.enqueue("gunshot wound", 1);
// pqH.enqueue("gunshot wound", 1);
// pqH.enqueue("high fever", 4);
// pqH.enqueue("broken arm", 2);
// pqH.enqueue("glass in foot", 3);
// console.log(pqH.dequeue());
// console.log(pqH.dequeue());
// console.log(pqH.dequeue());
// implementation using binary search tree
class NodeB {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        this.left = null;
        this.right = null;
    }
}

class PriorityQueueB {
    constructor() {
        this.root = null;
    }
    enqueue(val, priority) {
        let newNode = new NodeB(val, priority);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (priority < current.priority) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    dequeue() {
        let current = this.root;
        let parent = null;
        while (current.left) {
            parent = current;
            current = current.left;
        }
        if (parent) {
            parent.left = current.right;
        } else {
            this.root = current.right;
        }
        return current;
    }
}


const pqB = new PriorityQueueB();
pqB.enqueue("common cold", 5);
pqB.enqueue("gunshot wound", 1);
pqB.enqueue("gunshot wound", 1);
pqB.enqueue("high fever", 4);
pqB.enqueue("broken arm", 2);
pqB.enqueue("glass in foot", 3);
console.log(pqB.dequeue());
console.log(pqB.dequeue());


class PQL { // priority queue link list
	constructor() { 
	this.head = null;
	}
	enqueue(data , priority) {
		let newNode = new PNode(data , priority);
		if(!this.head || priority < this.head.priority) {
			newNode.next = this.head;
			this.head = newNode
		} else {
			let current = this.head;
			while(current.next && priority > current.next.priority) {
				current = current.next
			}
			newNode.next = current.next;
			current.next = newNode
		}
	}
	dequeu(){
		let temp = this.head;
		this.head = this.head.next
		return temp
	}
}
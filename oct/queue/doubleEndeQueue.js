// double ended Queue is a queue that allows you to add and remove items from the beginning or the end of the queue
// it does,nt follow FIFO rule

// mostaly used in breadth first search

// implementation using linked list
// it is also circular linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class DoubleEndedQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  addFront(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.length;
  }
  addBack(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.length;
  }
  removeFront() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp.val;
  }
  removeBack() {
    if (!this.first) return null;
    let current = this.first;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.last = newTail;
    this.last.next = null;
    this.length--;
    if (this.length === 0) {
      this.first = null;
      this.last = null;
    }
    return current.val;
  }
  peekFront() {
    return this.first;
  }
  peekBack() {
    return this.last;
  }
}

const doubleEndedQueue = new DoubleEndedQueue();
doubleEndedQueue.addFront(1);
doubleEndedQueue.addFront(2);
doubleEndedQueue.addFront(3);
doubleEndedQueue.addFront(4);

doubleEndedQueue.addBack(50);
doubleEndedQueue.addBack(60);
doubleEndedQueue.addBack(70);
doubleEndedQueue.addBack(80);

console.log(doubleEndedQueue);
console.log(doubleEndedQueue.removeFront());
console.log(doubleEndedQueue.removeBack());



// implementation using array

class DoubleEndedQueue2 {
  constructor() {
    this.Item = [];
  }
  addFront(item) {
    this.Item.unshift(item);
  }
  addBack(item) {
    this.Item.push(item);
  }
  removeFront() {
    if (this.Item.length === 0) return null;
    return this.Item.shift();
  }
  removeBack() {
    if (this.Item.length === 0) return null;
    return this.Item.pop();
  }
  peekFront() {
    return this.Item[0];
  }
  peekBack() {
    return this.Item[this.Item.length - 1];
  }
  isEmpty() {
    return this.Item.length === 0;
  }
}

const doubleEndedQueue2 = new DoubleEndedQueue2();
doubleEndedQueue2.addFront(1);
doubleEndedQueue2.addFront(2);
doubleEndedQueue2.addFront(3);
doubleEndedQueue2.addFront(4);

doubleEndedQueue2.addBack(50);
doubleEndedQueue2.addBack(60);
doubleEndedQueue2.addBack(70);

console.log(doubleEndedQueue2);
console.log(doubleEndedQueue2.removeFront());
console.log(doubleEndedQueue2.removeBack());

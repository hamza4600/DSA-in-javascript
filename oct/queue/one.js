// implementation of the queue
// FIFO
var queue = function () {
  var items = [];
  return {
    push: function (item) {
      items.push(item);
    },
    pop: function () {
      return items.shift();
    },
    show: function () {
      for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
      }
    },
  };
};

// create a queue
var q = queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);

// remove items from the queue

// show queue is empty
q.show(); // undefined
console.log("Reemoval of items from the queue");
q.pop(); // 1
q.show(); // 2, 3, 4

// class Base Implenetation
class Queue {
  constructor() {
    this.Items = [];
  }
  enqueue(item) {
    this.Items.push(item);
  }
  dequeue() {
    return this.Items.shift();
  }
  show() {
    for (let i = 0; i < this.Items.length; i++) {
      console.log(this.Items[i]);
    }
  }
  peek() {
    return this.Items[this.Items.length - 1];
  }
  isEmpty() {
    return this.Items.length === 0;
  }
  size() {
    return this.Items.length;
  }
  clearAll() {
    this.Items = [];
  }
}

// create a queue
var qa = new Queue();
qa.enqueue(1);
qa.enqueue(2);
qa.enqueue(3);
qa.enqueue(4);
console.log("Calss Base Reemoval of items from the queue");
qa.show(); // 1, 2, 3, 4
qa.dequeue(); // 1
qa.show(); // 2, 3, 4

// implementation of the queue using Two Stacks

class Stack {
  constructor() {
    this.Items = [];
  }
  push(item) {
    this.Items.push(item);
  }
  pop() {
    return this.Items.pop();
  }
  peek() {
    return this.Items[this.Items.length - 1];
  }
  isEmpty() {
    return this.Items.length === 0;
  }
  size() {
    return this.Items.length;
  }
  clearAll() {
    this.Items = [];
  }
}

class QueueUsingStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(item) {
    this.stack1.push(item);
  }
  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
  show() {
    for (let i = 0; i < this.stack1.Items.length; i++) {
      console.log(this.stack1.Items[i]);
    }
  }
}

// create a queue
var qas = new QueueUsingStack();
qas.enqueue(1);
qas.enqueue(2);
qas.enqueue(3);
qas.enqueue(4);
console.log("Calss Base tWO stACKS  Reemoval of items from the queue");
qas.show(); // 1, 2, 3, 4
qas.dequeue(); // 1
qas.show(); // 2, 3, 4`
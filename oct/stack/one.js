// stack
// first in last out
// LIFO
// stack implementation
class Stack {
  constructor() {
    this.Item = [];
  }
  // add
  add(item) {
    return this.Item.push(item);
  }
  // remove
  remove() {
    if (this.Item.length > 0) {
      return this.Item.pop();
    }
  }
  peek() {
    return this.Item[this.Item.length - 1];
  }
  // size
  size() {
    return this.Item.length;
  }
  // isEmpty
  isEmpty() {
    return this.Item.length === 0;
  }
  allItems() {
    for (var i = 0; i < this.Item.length; i++) {
      console.log(this.Item[i]);
    }
  }
}


const stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
stack.allItems();
console.log("Stack size: " + stack.size());
console.log(stack.size());
console.log(stack.peek());
stack.allItems();
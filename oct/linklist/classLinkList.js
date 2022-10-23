//  implemetatio in class Base
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.length = 0;
  }
// add a node to the end of the list
  append(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
// insert a node at a specific position
  insert(position, data) {
    if (position < 0 || position > this.length) return false;

    let newNode = new Node(data);
    let current = this.head;
    let previous;
    let index = 0;

    if (position === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length++;
    return true;
  }

  get(position) {
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  }
// seraching is O(n)    
  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  update(position, data) {
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.data = data;
    return true;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    let previous;
    let index = 0;
    if (position === 0) {
      this.head = current.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.data;
  }
  isEmpty() {
    if (this.length === 0) return true;
  }
  size() {
    return this.length;
  }
  allItems() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  reverseRecursively() {
    function reverse(current, previous) {
      if (!current) {
        return previous;
      }
      let next = current.next;
      current.next = previous;
      return reverse(next, current);
    }
    this.head = reverse(this.head, null);
  }

  memorySize() {
    // show size of memory of linked list
    let current = this.head;
    let index = 0;
    let size = 0;
    // why 8? because each node has 2 properties: data and next
    // data is a primitive type, so it takes 8 bytes
    // next is a reference type, so it takes 8 bytes
    while (current) {
      size += 8;
      current = current.next;
    }
    return size;
  }
  memoryAddress() {
    // show memory address of each node
    let current = this.head;
    let index = 0;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

let linklist = new Linklist();
const add = (data) => {
  for (let i = 20; i <= 30; i++) {
    linklist.append(i + 10);
  }
};
add();
linklist.allItems();
linklist.reverse();
linklist.allItems();
console.log("Memeory size: " + linklist.memorySize() + " bytes");
linklist.memoryAddress();
// search
console.log(linklist.indexOf(30));

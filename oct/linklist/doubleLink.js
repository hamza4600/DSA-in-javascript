// Double link list
// it have two pointers one to next node and one to previous node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
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
      newNode.prev = current;
    }
    this.length++;
  }
  insert(position, data) {
    if (position < 0 || position > this.length) return false;
    let newNode = new Node(data);
    let current = this.head;
    let previous;
    let index = 0;
    if (position === 0) {
      newNode.next = current;
      current.prev = newNode;
      this.head = newNode;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      newNode.prev = previous;
      current.prev = newNode;
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
  removeAt(position) {
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    let previous;
    let index = 0;
    if (position === 0) {
      this.head = current.next;
      this.head.prev = null;
    } else if (position === this.length - 1) {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      current.next.prev = previous;
    }
    this.length--;
    return current.data;
  }
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
  isEmpty() {
    return this.length === 0;
  }
  // all Node
  allNode() {
    let current = this.head;
    let allNode = [];
    while (current) {
      allNode.push(current.data);
      current = current.next;
    }
    return allNode;
  }
  // reverse
  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

let doubleLinkList = new DoubleLinkList();
doubleLinkList.append(1);
doubleLinkList.append(2);
doubleLinkList.append(3);
doubleLinkList.append(4);
doubleLinkList.append(5);
doubleLinkList.append(6);
doubleLinkList.append(7);

console.log(doubleLinkList);
console.log(doubleLinkList.allNode());
doubleLinkList.reverse();
console.log(doubleLinkList.allNode());

// mostly used in browser history and undo/redo operations in text editors and word processors.

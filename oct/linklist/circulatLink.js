// circulat LinkList
//  last node points to the first node or last node is connected to the first node
//  circular linked list is a linked list where all nodes are connected to form a circle.
//  There is no NULL at the end. A circular linked list can be a singly circular linked list or doubly circular linked list.
//  Advantages of Circular Linked Lists
//  1) Any node can be a starting point. We can traverse the whole list by starting from any point. We just need to stop when the first visited node is visited again.
//  2) Useful for implementation of queue. Unlike simple linked list, we can delete a node from the middle of the linked list in O(1) time using circular linked list.
//  3) Circular lists are useful in applications to repeatedly go around the list. For example, when multiple applications are running on a PC, it is common for the operating system to put the running applications on a list and then to cycle through them, giving each of them a slice of time to execute, and then making them wait while the others execute. It is convenient for the operating system to use a circular list so that when it reaches the end of the list it can cycle around to the front of the list.
//  4) Circular Doubly Linked List can be used for implementation of advanced data structures like Fibonacci Heap.

//  Disadvantages of Circular Linked Lists
//  1) A circular linked list is not useful for implementation of stack. Unlike simple linked list, we can not delete a node from the middle of the linked list in O(1) time using circular linked list.
//  2) All basic operations are same as Singly Linked List, but there are many extra operations required for Circular Linked List.
//  3) Extra memory space for one pointer is required with every node.

//  Applications of Circular Linked Lists
//  1) Circular lists are useful in applications to repeatedly go around the list. For example, when multiple applications are running on a PC, it is common for the operating system to put the running applications on a list and then to cycle through them, giving each of them a slice of time to execute, and then making them wait while the others execute. It is convenient for the operating system to use a circular list so that when it reaches the end of the list it can cycle around to the front of the list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      // if there is no head
      this.head = newNode; 
      this.tail = newNode;  
    } else {
      this.tail.next = newNode; // if there is a head then the tail will point to the new node
      newNode.next = this.head; // the new node will point to the head
      this.tail = newNode; // the tail will be the new node
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next !== this.head) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = this.head;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.tail.next = this.head;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
      if (current === this.head) break;
    }
    console.log(arr);
  }
}

let list = new CircularLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
list.push(70);

list.print();
list.reverse();
list.print();
console.log(list);

//Node
class CNode {
  constructor(elm, next = null, prev = null) {
    this.element = elm;
    this.next = next;
  }
}

class circularLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  //Get element at specific index
  getElementAt = function (index) {
    if (index >= 0 && index <= this.length) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  };

  //Add new node
  append = function (element) {
    //Create new node
    const node = new CNode(element);
    let current;

    //If head is empty
    //Then make new node head
    if (this.head === null) {
      this.head = node;
    } else {
      //Else add the new node as the next node
      //And mark the next of new node to the head
      current = this.getElementAt(this.length - 1);
      current.next = node;
    }

    node.next = this.head;
    this.length++;
  };

  //Insert at given position
  insert = function (element, index) {
    if (index >= 0 && index <= this.length) {
      const node = new CNode(element);
      let current = this.head;

      //Insert at head
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.length);
          this.head = node;
          current.next = this.head;
        }
      } else {
        //Insert at given index (middle or end)
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }

      this.length++;
      return true;
    }
    return false;
  };

  //Remove at any position
  removeAt = function (index) {
    if (index >= 0 && index < this.length) {
      let current = this.head;

      //Remove from head
      if (index === 0) {
        if (this.length === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.length - 1);
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        //Remove at given index (middle or end)
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.length--;
      return current.element;
    }
    return undefined;
  };

  //Get the indexOf item
  indexOf = function (elm) {
    let current = this.head,
      index = -1;

    //If element found then return its position
    while (current) {
      if (elm === current.element) {
        return ++index;
      }

      index++;
      current = current.next;
    }

    //Else return -1
    return -1;
  };

  //Find the item in the list
  isPresent = (elm) => {
    return this.indexOf(elm) !== -1;
  };

  //Get the head
  getHead = function () {
    return this.head;
  };

  //Delete an item from the list
  delete = (elm) => {
    return this.removeAt(this.indexOf(elm));
  };

  //Delete the first item from the list
  deleteHead = function () {
    this.removeAt(0);
  };

  //Print item of the string
  toString = function () {
    let current = this.head,
      string = "";

    //Keep track of the head
    const temp = this.head.element;

    while (current) {
      //If head is the next element then break
      if (temp === current.next.element) {
        string += current.element + (current.next ? "\n" : "");
        break;
      }

      string += current.element + (current.next ? "\n" : "");
      current = current.next;
    }

    return string;
  };

  //Convert list to array
  toArray = function () {
    let arr = [],
      current = this.head;

    //Keep track of head
    const temp = this.head.element;

    while (current) {
      //Break if first element detected
      if (temp === current.next.element) {
        arr.push(current.element);
        break;
      }

      arr.push(current.element);
      current = current.next;
    }

    return arr;
  };

  //Check if list is empty
  isEmpty = function () {
    return this.length === 0;
  };

  //Get the size of the list
  size = function () {
    return this.length;
  };
}

//Create new list
const list2 = new circularLinkedList();
list2.append(10);
list2.append(20);
list2.append(30);
list2.append(40);
list2.append(50);
list2.append(60);
list2.append(70);

//Print the list
console.log(list2.toArray());
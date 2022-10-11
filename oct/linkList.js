// creat a link list
// 1->2->3->4->5->6->7->8->9->10->null

function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.append = function (data) {
  var newNode = new Node(data);
  if (this.head === null) {
    this.head = newNode;
  } else {
    var current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.length++;
};

LinkedList.prototype.insert = function (position, data) {
  if (position < 0 || position > this.length) return false;

  var newNode = new Node(data);
  var current = this.head;
  var previous;
  var index = 0;

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
};

LinkedList.prototype.get = function (position) {
  if (position < 0 || position >= this.length) return null;
  var current = this.head;
  var index = 0;
  while (index++ < position) {
    current = current.next;
  }
  return current.data;
};

LinkedList.prototype.indexOf = function (data) {
  var current = this.head;
  var index = 0;
  while (current) {
    if (current.data === data) {
      return index;
    }
    index++;
    current = current.next;
  }
  return -1;
};

LinkedList.prototype.update = function (position, newData) {
  if (position < 0 || position >= this.length) return false;
  var current = this.head;
  var index = 0;
  while (index++ < position) {
    current = current.next;
  }
  current.data = newData;
  return true;
};

LinkedList.prototype.removeAt = function (position) {
  if (position < 0 || position >= this.length) return null;

  var current = this.head;
  var previous;
  var index = 0;

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
};

LinkedList.prototype.remove = function (data) {
  var index = this.indexOf(data);
  return this.removeAt(index);
};

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

LinkedList.prototype.size = function () {
  return this.length;
};

LinkedList.prototype.toString = function () {
  var current = this.head;
  var string = "";
  while (current) {
    string += current.data + "->";
    current = current.next;
  }
  return string;
};

var list = new LinkedList();
// add 10 itme to the list
for (var i = 1; i <= 10; i++) {
  list.append(i);
}

console.log(list.toString());

// function taht calculate run time of a function
function timeIt(fn) {
  var start = new Date().getTime();
  fn();
  var end = new Date().getTime();
  console.log("Time taken: " + (end - start) + "ms");
}

function test() {
  // testing Lisk  lsit
  for (var i = 0; i <= 100; i++) {
    list.insert(10, i);
  }
  console.table(list.toString());
}

function Test() {
  list.insert(6, 99);
  console.log(list.toString());
}
// tak 0 second to add item in any index in Linklist
// timeIt(test);

// creat an array
console.log("Array Opertaions ");
var arr = [];
for (var i = 1; i <= 10; i++) {
  arr.push(i);
}

console.log(arr);
// add 100 item in array
function testArray() {
  for (var i = 100; i >= 0; i--) {
    // add at 5 index
    arr.splice(5, 0, i);
  }
  console.table(arr);
}
// what splice do is it remove item from array and add new item in array

// tak 0.3 second to add item in any index in Array
timeIt(testArray);

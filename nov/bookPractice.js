// Practice Books 
function factRe(num) {
	if (num === 1) {
		return num
	}
	return num * factRe(num - 1);
}

// console.log(factRe(10))

function C(a) {
	return console.log(a);
}

// Addinh Bits
function Add(a, b) {
	if (b === 0) {
		return a
	};
	return Add(a ^ b, (a & b) << 1);
}
// C(Add(10, 50));

//
function Senetence(stn) {
	let words = stn.split(" ");
	for (var i = 0; i < words.length; i++) {
		console.log(i, ":", words[i])
	}
}
var sentence = "the quick brown fox jumped over the lazy dog";

// Senetence(sentence)

//deep copy
function copy(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		arr1[i] = arr2[i]
	}
}

// 
function filter(arr) {
	let even = arr.filter(function (x) {
		return (x % 2 === 0)
	})
	console.log(even)
}

let data = [4, 8, 15, 16, 23, 42];
// filter(data)


// Matrix 
function Matrix(numRows, numCols, initial) {
	let arr = [];
	for (var i = 0; i < numRows; i++) {
		let columns = [];
		for (var j = 0; j < numCols; j++) {
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

// C(Matrix(3 , 3 ,9))

// palidronimonail 
function pali(str) {
	let stack = [];
	for (var i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}
	let reverWord = ""
	while (stack.length) {
		reverWord += stack.pop()
	}
	if (reverWord === str) {
		return true
	}
	return false
}

// C(pali("popi"))

// Priority Queus 
class PriorityQueue {
	constructor() {
		this.Item = [];
	}
	enqueue(add) {
		if (this.Item.length === 0) {
			this.Item.push(add)
		} else {
			let added = false
			for (var i = 0; i < this.Item.length; i++) {
				if (add[1] < this.Item[i][1]) {
					this.Item.splice(i, 0, add);
					added = true;
					break;
				}
			}
			if (!added) {
				this.Item.push(add)
			}
		}
	}
	dequeue() {
		return this.Item.shift()
	}

}


// let pq = new PriorityQueue();
// pq.enqueue(["Beau Carnes", 2]);
//  pq.enqueue(["Quincy Larson", 3]);
// pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
// pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
// pq.enqueue(["Briana Swift", 2]);
// pq.dequeue();
// C(pq);


// Linklist 
class Node {
	constructor(data) {
		this.value = data;
		this.next = null;
	}
}

class LinkList {
	constructor() {
		this.head = null;
		this.length = 0
	}
	add(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.length++;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
			this.length++
		}
	}
	search(value) {
		let current = this.head;
		while (current.next) {
			if (value === current.value) {
				return value
			}
			current = current.next
		}
		return null;
	}
	insert(value, index) {
		let current = this.head;
		let newNode = new Node(value);
		if (index === 0) {
			newNode.next = current;
			this.head = newNode;
		} else {
			let previus = null;
			let i = 0;
			while (i < index) {
				previus = current;
				current = current.next
				i++;
			}
			newNode.next = current;
			previus.next = newNode;
			this.length++;
		}
	}
	remove(index) {
		let current = this.head;
		if (index === 0) {
			this.head = current.next;
		} else {
			let previus = null
			let i = 0;
			while (i < index) {
				previus = current;
				current = current.next
				i++;
			}
			previus.next = current.next;
		}
		this.length--;
	}
	showNodes() {
		let curent = this.head
		while (current.next) {
			console.log(current);
			current = current.next
		}
	}
}


// Double link Listy 
class DNode {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previus = null
	}
}

class DoubleLinkList {
	constructor() {
		this.head = null
		this.length
	}
	addNode(vale) {
		let newNode = new DNode(value);
		if (!this.head) {
			this.head = newNode;
			this.length++
		} else {
			let current = this.head;
			while (current.next) {
				let current = current.next
			}
			current.next = newNode;
			newNode.previus = current;
			this.length++
		}
	}
	find(data) {
		let current = this.head;
		while (current.next) {
			if (data !== current.value) {
				current = current.next
			}
			return current;
		}
	}
	insert(data, index) {
		let newNode = new DNode(data);
		let current = this.head;
		// if(index === 
	}

}
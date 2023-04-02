// basic Data structure 
class Stack {
	constructor() {
		this.Item = []
	}
	push(item) {
		this.Item.push(item)
	}
	pop() {
		this.Item.pop()
	}
	allItem() {
		for (var i = 0; i < this.Item.length; i++) {
			console.log(i)
		}
	}
	peek() {
		return this.Item[this.Item.length - 1]
	}
	isEmpty() {
		return this.Item.length > 0
	}
}

// Queue 
class Queue {
	constructor() {
		this.Item = []
	}
	enqueue(item) {
		this.Item.push(item)
	}
	dequeue() {
		if (this.Item.length > 0) {
			this.Item.shift()
		}
	}
}

// using Two Stacks 
class QueTwoStacks {
	constructor() {
		this.arr1 = new Stack()
		this.arr2 = new Stack()
	}
	enqueue(item) {
		this.arr1.push(item)
	}
	dequeue() {
		if (this.arr2.isEmpty()) {
			while (!this.arr1.isEmpty()) {
				this.arr2.push(this.arr1.pop())
			}
		}
		return this.arr2.pop()
	}
}

// Link list 
class LinkNode {
	constructor(data) {
		this.data = data;
		this.next = null
	}
}
class LinkList {
	constructor() {
		this.head = null;
		this.length = null;
	}
	append(item) {
		let newNode = new LinkNode(item);
		if (this.head === null) {
			this.head = newNode
		} else {
			let currentNode = this.head;
			while (currentNode.next) {
				currentNode = currentNode.next
			}
			currentNode.next = newNode
		}
		this.length++;
	}
	insert(posit, data) {
		if (posit < 0 || posit > this.length) return false;

		let newNode = new LinkNode(data);
		let curent = this.head;
		let previus;
		let index = 0;
		if (posit === 0) {
			newNode.next = curent;
			this.head = newNode;
		} else {
			while (index++ < posit) {
				previus = curent;
				curent = curent.next;
			}
			newNode.next = curent;
			previus.next = newNode;
		}
		this.length++;
		return true;
	}
	get(pos) {
		if (posit < 0 || posit > this.length) return false;
		let current = this.head
		let index = 0;
		while (index++ < posit) {
			current = curent.next
		}
		return curent.next
	}
	// return index of Item searching 
	indexOf(data) {
		let curent = this.head;
		let index = 0;
		while (curent) {
			if (curent.data === data) {
				return index
			}
			index++;
			curent = curent.next
		}
		return -1
	}
	// all Item in Linklist 
	allItems() {
		let current = this.head;
		while (curent) {
			constructor.log(curent.data);
			curent = curent.next
		}
	}
	// update Item at index 
	update(posi, data) {
		if (posi < 0 || posi > this.length) return false;
		let current = this.head;
		let index = 0
		while (index++ < posit) {
			curent = curent.next
		}
		curent.data = data
		return true;
	}
	// reverse LinkList 
	reverseRecurion() {
		function recursion(curent, previus) {
			if (!curent) {
				return previus
			}
			let next = curent.next;
			curent.next = previus;
			return recursion(next, curent)
		}
		this.head = recursion(this.head, null)
	}
}

// Hash table to stor data in Key value Pair 

class hashTable {
	constructor() {
		this.values = {};
		this.length = 0;
		this.size = 0;
	}
	hashFun(key) {
		return key.toString().length % this.size;
	}
	add(key, value) {
		let hash = this.hashFun(key);
		if (!this.values.hasOwnProperty(hash)) {
			this.values[hash] = {};
		}
		if (!this.values[hash].hasOwnProperty(key)) {
			this.length++;
		}
		this.values[hash][key];
	}
	search(key) {
		let hash = this.hashFun(key);
		if (
			this.values.hasOwnProperty(hash) &&
			this.values[hash].hasOwnProperty(key)
		) {
			return this.values[hash][key]
		} else {
			return null;
		}
	}
}


// 
class HasTable2 {
	constructor(size = 60) {
		this.Map = new Array(size)
	}
	hash(key) {
		let prim = 31;
		let total = 0;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.chaCodeAt(0) - 96;
			total = (total * prim + value) % this.Map.length;
		}
		return total;
	}
	// hash (key){
	// return key.toString().length % this.Map.length
	// }
	add(key, value) {
		let hash = hash(key);
		if (!this.Map[hash]) {
			this.Map[index] = [];
		}
		this.Map[index].push(key, value)
	}
	get(key) {
		let hash = hash(key);
		if (this.Map[hash]) {
			for (var i = 0; i < this.Map[hash].length; i++) {
				if (this.Map[hash][i][0] === key) {
					return this.Map[hash][i][1]
				}
			}
		}
	}
}

// BInary Search Tree 

class BNode {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new BNode(value);
		if (this.root === null) {
			this.root = newNode;
		}
		let current = this.root;
		while (true) {
			if (value < current.value) {
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
	find(value) {
		if (this.root === null) return false;
		let current = this.root;
		found = false;
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true
			}
		}
		if (!found) return undefined;
		return current;
	}
}

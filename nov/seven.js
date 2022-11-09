// D S
// Hash Table 
class HashTable {
	constructor(){
		this.Map ={};
		this.length =0;
		 
	}
	hashFun(key){
		return key.toString().length % this.length;
	}
	add(key , value) {
		const hash = hashFun(key);
		if(!this.Map.hasOwnProperty(key)){
			return this.Map[hash]={}
		}
		if(!this.Map[hash].hasOwnProperty(key)){
			this.length++;
		}
		this.Map[hash][key] = value;
	}
	search(key){
		const hash = hashFun(key);
		if(
			this.Map.hasOwnProperty(hash) &&
			this.Map[hash].hasOwnProperty(key)
			) {
			return this.Map[hash][key]
		} else {
			return null;
		}
	}
}

// BInary Search Tree A tree 
class Node {
	constructor(value){
		this.value= value;
		this.right= null;
		this.left= null;
	}
}

class BinarySearchTree {
	constructor(){
		this.root = null;
	}
	add(data){
		const newNode = new Node(data)
		if(this.root === null) {
			this.root = new Node;
		} else {
			let current = this.root;
			while(true) {
				if(current.value === data) return undefined;
				if(data < current.value) {
					if(current.left === null) {
						current.left = newNode;
					} else {
						current = current.left;
					} else if(data > current.value) {
						if(current.right === null) {
							current.right = newNode;
						} else {
							current = current.right;
						}
					}
				}
			}
		}
	}
	find(value) {
		if(this.root === null) return false;
		let found  = false;
		let current  = this.root;
		while(current && !found) {
			if(value < current.value) {
				current = current.left;
			} else if( value > current.value) {
				current = current.right;
			} else {
				found = true
			}
			if(!found) return false;
			return current;
		}
	}

}

// LinkList 
class LNode {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}
class LinkList {
	constructor() {
		this.head= null
		this.length= 0
	}
	add(value) {
		const newNode = new LNode(value);
		if(this.head === null ){
			this.head = newNode;
		} else {
		let current = this.head;
		while(current.next){
			current = current.next;
		}
		current.next = newNode;
	}
		this.length++;
	}
	search(value) {
		let current = this.root;
		let index = 0;
		if(current === value) {
			return current
		} else {
			while(current){
				if(current.value === value) {
					return index
				}
				current  =current.next;
				index++;
			}
			return -1
		}
	}
	reverserRecursion() {
		function recursio(current , prev) {
			if(!current) {
				return prev
			}
			let next = current.next;
			current.next = prev;
			return recursio(next , current)
		}
		this.root = recursio(this.head , null ) 
	}
	update(positin , data) {
		if(positin < 0 || positin > this.length) return false;
		let current  = this.head;
		let index = 0;
		while(index++ <positin) {
			current = current.next
		}
		current.data = data;
		return true
	}
}

// double Link List 
class DNode {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
class DoubleLinkList {
	constructor(){
		this.head= null;
		this.length= 0;
	}
	append(value) {
		const newNode = new DNode(value)
		if(this.head === null ) {
			this.head = newNode;
		}
		else {
			let current = this.head;
			while(current.next){
				current = current.next
			}
			current.next = newNode;
			newNode.pre = current;
		}
		this.length++
	}
	insert(postion , value){
		if( postion <0 || positin > this.length) return false;
		let newNode = new DNode(value);
		let current = this.head;
		let previus ;
		let index = 0;
		if(postion === 0) {
			newNode.prev  = current;
			current.prev = newNode
			this.head = newNode
		} else {
			while(index++ < positin) {
				previus = current;
				current = current.next
			}
			newNode.next = current;
			newNode.pre = previus;
			current.next = newNode;
			previus.next = newNode;
		}
		this.length++
		return true;
	}	
}

// Queue 
// FIFO
class Queue {
	constructor() {
		this.Item = [];
	}
	enqueue(value){
		return this.Item.pop(value);
	}
	dequeue() {
		return this.Item.shift()
	}
	last(){
		return this.Item(this.Item.length-1)
	}
	first(){
		return this.Item[0]
	}
}


// Double ended
 class DoubleEndedQueue {
 	constructor(){
 		this.Item = []
 	}
 	appendFront(data) {
 		return this.Item.unshift(data)
 	}
 	appendBack(data){
 		return this.Item.pop(data)
 	}
 	removeFront(){
 		if( this.Item.length > 0) {
 			return this.Item.shift()
 		}
 	}
 	returnBack() {
 		return this.Item.pop();
 	}
}

class DqNode {
	constructor(value){
		this.value = value;
		this.next= null;
	}
}
class DQL {
	constructor(){
		this.head = null
		this.length = 0;
		this.tail = null
	}
	append(data){
		let newNode = new DqNode(data);
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
		} else {
			let temp = this.head;
			this.head = newNode;
			this.head.next = temp;
		}
	}
}

// priority queue 
// array 
class PrioA {
	constructor(){
		this.Item = [];
	}
	enqueue(value , priority){
		this.Item.push({value ,priority});
		this.sort()
	}
	dequeue() {
		return this.Item.unshift()
	}
	sort() {
		return this.Item.sort((a,b) => a.priority - b-priority)
	}
}


// Link List 
class PNode {
	constructor(value , priority) {
		this.value = value;
		this.priority = priority;
		this.next = null;
	}
}

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

// Graphs 
class Graphs {
	constructor() {
		this.Map = {};
	}
	addVertxi(vertix) {
		if(!this.Map[vertix]) this.Map.[vertix]=[]
	}
	addEdges(vert1, vert2) {
		this.Map[vert1].push(vert2)
		this.Map[vert2].push(vert1)
	}
	findNode(vertex){
		return this.Map[vertex]
	}
	allNodes() {
		return Object.key(this.Map)
	}
} 
// LinkList IOmplemetation in Js 
// By Class method 
class Node {
	constructor(data){
		this.data= data;
		this.next= null
	}
}

class LinkList {
	constructor(){
		this.head = null;
		this.length = 0
	}
	append(data) {
		let newNode = new Node(data);
		if(this.head === null) {
			this.head = newNode;
		}else {
			let current = this.head;
			while(current.next){
				current=current.next;
			}
			current.next= newNode
		}
			this.length++;
	}
	insert( position , data) {
		if(position < 0 || position > this.length) return false;
		let newNode = new Node(data);
		let previus;
		let current= this.head;
		let index=0;
		if(position === 0){
			newNode.next = newNode;
			this.head = newNode
		}else {
			while(index++ < position) {
				position = current;
				current = current.next;
			}
			newNode.next = current;
			previus.next = newNode
		}
		this.length++;
		return true;
	}
	get(position){
		if(position <0 || this.head >= position) return false;
		let current = this.head;
		let index =0;
		while(index++ < position) {
			current = current.next;
		}
		return current.data;
	}
	// return Index 
	indexOf(data){
		let current = this.head;
		let index =o;
		while(current){
			if(current.data === data){
				return index
			}
			index ++;
			current = current.next
		}
		return -1;
	}
	// update value at given point
	update(postion , data){
		if(position <0 || position >= this.length) return false;
		let current = this.head;
		let index =0;
		while(index++ <position) {
			current = current.next
		}
		current.data = data;
		return true
	}
	isEmpty(){
		if(this.length === 0) return true
	}
	length(){
		return this.length;
	}
	removeAt(position) {
		if( position <0 || position >= this.length) return null;
		let current = this.head;
		let previus = ;
		let index = 0;
		if(position === 0){
			this.head=current.next;
		} else {
		while( index++ < position){
			previus = current;
			current = current.next
		}
		previus.next = current.next;
		}
		this.length--;
		return current.data
	}
	allItems(){
		let current= this.head;
		let index = 0;
		while(current){
			console.log(current.data);
			current = current.next
		}
	}
	reverse(){
		let current = this.head;
		let previus = null;
		let next = null;
		while(current){
			next = current.next;
			current.next = previus;
			previus = current;
			current = next
		}
		this.head = previus
	}
	// using recursion
	reverseRecursion(){
		function recursion(current , previus){
			if(!current) {
				return previus
			}
			let next = current.next;
			current.next = previus;
			return recursion(next , current)
		}
		this.head = recursion(this.head , null)

	}


}



// base on Principe of LIFO
class Stack {
	constructor() {
		this.Item =[];
	}
	push(item){
		return this.Item.push(item)
	}
	pop(){
		if(this.Item.length() > 0){
			return this.Item.pop()
		}
	}
	isEmpyt(){
		return this.Item.length === 0;
	}
}
//Queue 
// base on Principle of FIFO
class Queue {
	constructor() {
		this.Item = []
	}
	enque(item) {
		return this.Item.push(item);
	}
	dequeue() {
		return this.Item.shift();
	}
	clearAll() {
		return this.Item = []
	}
	// last item
	peek() {
		return this.Item[this.Item.length -1]
	}
}

// Que using two Stacks
class QueueTwoStacks {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}
	enque(item) {
		return this.stack1.push(item);
	}
	dequeue() {
		if(this.stack2.isEmpyt()) {
			while(!this.stack1.isEmpyt()){
				this.stack2.push(this.stack1.pop())
			}
		}
		return this.stack2.pop()
	}
}

// hashTable Key value for Data string and retriving 
class HasTable1 {
	constructor() {
		this.values = {};
		this.length  = 0;
		this.size = 0;
	}
	calcuHash(key) {
		return key.toString().length % this.size;
	}
	add(key , value) {
		const hash = this.calcuHash(key);
		if(!this.values.hasOwnProperty(hash)) {
			this.values[hash] = {};
		}
		if(!this.values.[hash].hasOwnProperty(key)) {
			this.length++;
		}
		this.values[hash][key] = values
	}
	serach(key) {
		const hash = this.calcuHash(key);
		if (
			this.values.hasOwnProperty(hash) &&
			this.values[hash].hasOwnProperty(key)
			) {
			return this.values[hash][key]
		} else {
			return null
		}
	}
}

const hasT = new HasTable1();
hasT.add("1" , "Hamzza Khanz")
hasT.add("20" , "Hamzza Khanz")

console.log(hasT.serach("1"))

// now BY Array 
class HasTable2 {
	constructor(size = 60) {
		this.keyMap = new Array(size);
	}
	hashFun(key) {
		let total = 0;
		let Prime = 31;
		for(var i=0; i< Math.min(key.length , 100) i++) {
			let char = key[i]
			let values = char.charCodeAt(0) - 96;
			total = (total * Prime + values)%this.keyMap.length
		}
		return total
	}
	add(key , value) {
		let hash = hashFun(key);
		if(!this.keyMap[hash]) {
			return this.keyMap[index] = []
		}
		this.keyMap[hash].push([key , value])
	}
	get(key) {
		let hash = hashFun(key);
		if(this.keyMap[hash]) {
			for(var i=0; i<this.keyMap[hash].length; i++) {
				if(this.keyMap[hash][0] === key ) {
					return this.keyMap[hash][i][1];
				}
			}
		}
		return undefined
	}
	// get Keys 
	keys() {
		let keys = [];
		for(var i=0; i<this.keyMap.length; i++) {
			if(this.keyMap[i]) {
				for( let j=0; j<this.keyMap[i].length; j++) {
					if(!keys.includes(this.keyMap[i][j][1])) {
						keys.push(this.keyMap[i][j][1])
					}
				}
			}
		}
	}
}

	// BInary SEARCH  Tree 

class BNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new BNode(value);
		if(this.root === null) {
			this.root === newNode;
			return this;
		} else {
			let current = this.root;
			while (true) {
				if( value === current.value) return undefined;
				if( value < current.value) {
					if(current.left === null) {
						current.left = newNode
						return this;
					} else {
						current = current.left;
					}
				} else if (value > current.value) {
					if(current.right === null) {
						current.right = newNode
						return this
					} else {
						current = current.right
					}
				}
			}
		}
	}
	find(value) {
		if(this.root === null) return false;
		let current = this.root;
		let found = false;
		while (current && !found) {
			if(value < current.value) {
				current = current.left
			} else if ( value >  current.value) {
				current = current.right;
			} else {
				found= true
			}
		} 
		if(!found) return undefined;
		return current;
	}
	getAllItems() {
		return this.root;
	}

}


// Graph is like an Object 
 class Graph {
 	constructor() {
 		this.adjcentList= {};
 	}
 	addVertix(vertix) {	
 		if(!this.adjcentList[vertix]) {
 			this.adjcentList[vertix] = [];
 		}
 	}
 	addEdge(vertix1 , vertix2) {
 		this.adjcentList[vertix1].push(vertix2)
 		this.adjcentList[vertix2].push(vertix1)
 	}
 	findNode(vertix) {
 		return this.adjcentList[vertix]
 	}
 	allNodes() {
 		return Object.keys(this.adjcentList)
 	}
 }
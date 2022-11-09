// Reviese Data structure 
// Link List 
class Node {
	constructor(value) {
		this.value = value;
		this.next = next;
	}
}

class LinkList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	append(data) {
		const newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next
			}
			current.data = newNode
			this.length++;
		}
	}
	insertPosition(position, data) {
		if (position < 0 || position > this.length) return false;
		let newNode = new Node(data);
		let index = 0;
		let current = this.head;
		let previus;
		// if at 1st Pos
		if (position === 0) {
			newNode.next = current;
			this.head = newNode;
		} else {
			while (index++ < position) {
				previus = current;
				current = current.next;
			}
			newNode.next = current;
			current = newNode;
		}
		this.length++;
		return true
	}
	// retur Index
	indexOf(data) {
		let current = this.head;
		let index = 0;
		while (current) {
			if (current.data === data) {
				return current
			}
			index++;
			current = current.next;
		}
		return -1;
	}
	reverserRecursion() {
		function recursio(current, previus) {
			if (!current) {
				return previus
			}
			let next = current.next;
			current.next = previus;
			return recursio(next, current)
		}
		this.head = recursio(this.head, null)
	}
	reverse() {
		let current = this.head;
		let next = null;
		let previus = null;
		while (current) {
			next = current.next;
			current.next = previus;
			previus = current;
			current = next
		}
		this.head = previus

	}
}

// Double link List 
class DNode {
	constructor(value) {
		this.value = value;
		this.next = null
		this.previus = null
	}
}

class DoubleLinkList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	append(data) {
		let newNode = new DNode(data);
		if (this.head === null) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next
			}
			current.next = newNode;
			current.previus = current
		}
		this.length++;
	}
	insert(position, data) {
		if (position < 0 || position > this.length) return false;
		let newNode = new DNode(data);
		let current = this.head;
		let index = 0;
		let previus;
		if (position === 0) {
			newNode.next = current
			current.previus = newNode;
			this.head = newNode
		} else {
			while (index++ < position) {
				previus = current;
				current = current.next
			}
			newNode.next = current;
			newNode.previus = previus
			current.previus = newNode;
			previus.next = newNode;
		}
		this.length++;
		return true
	}
	removeAt(position) {
		if (position < 0 || position > this.length) return false;
		let current = this.head;
		let index = 0;
		let previus;
		if (position === 0) {
			this.head = current.next;
			this.head.previus = null
		} else if (position === this.length - 1) {  //if last 
			while (index++ < position) {
				previus = current
				current = current.next;
			}
			previus.next = null;
		} else {
			while (index++ < position) {
				previus = current
				current = current.next;
			}
			previus.next = current.next;
			current.next.previus = previus
		}
		this.length--;
		return current.data;
	}
}


// circular LInk list 
class CircularLink {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = null;
	}
	append(data) { // all nodes are connected 
		let newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			newNode.next = this.head;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
			this.tail.next = this.head
		}
		this.length++;
		return this
	}
	pop() { // remove 

	}
}
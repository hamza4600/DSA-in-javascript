// OOPs

class Book {
    constructor(id, title, author, genre, read, readDate) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.read = read || false;
        this.readDate = readDate || null;
    }
    getDescription() {
        var description = this.title + " by " + this.author;
        return description;
    }
}


class BookList {
    constructor() {
        this.books = [];
        this.lastId = 0;
    }
    add(book) {
        book.id = this.lastId + 1;
        this.books.push(book);
        this.lastId++;
    }
}


// var book1 = new Book(1, "The Hobbit", "J.R.R. Tolkien", "Fantasy", true, new Date(1937, 9, 21));
// var book2 = new Book(2, "The Fellowship of the Ring", "J.R.R. Tolkien", "Fantasy", true, new Date(1954, 7, 29));
// var book3 = new Book(3, "The Two Towers", "J.R.R. Tolkien", "Fantasy", true, new Date(1954, 11, 11));
// var book4 = new Book(4, "The Return of the King", "J.R.R. Tolkien", "Fantasy", true, new Date(1955, 10, 20));

// var myBooks = new BookList();
// myBooks.add(book1);
// myBooks.add(book2);
// myBooks.add(book3);
// myBooks.add(book4);

// console.log(myBooks);


// Recusrsion
function Rec(b) {
    if (b === 0) {
        return false
    }
    console.log("hello", b)
    return Rec(b - 1);
}

// Rec(5)
function Sum(n) {
    if (n === 0) {
        return false;
    }
    let sum = n + Sum(n - 1);
    return sum
}
// console.log(Sum(5))

function fact(n) {
    if (n === 1) {
        return n;
    }
    let multi = n * fact(n - 1);
    return multi;
}

// console.log(fact(5))

function power(a, b) {
    if (b === 0) {
        return 1;
    }
    let pow = a * power(a, b - 1);
    return pow
}

// console.log(power(2,3))

// if ((b&1) !== 0) odd number ha 
// a << 1 == a*a
function ModPower(a, b) {
    let result = 1;
    while (b > 0) {
        if ((b & 1) !== 0) { // if odd
            result = result * a;
        }
        a = a * a;
        b = b >> 1  // divide by 2
    }
    return result;
}
// console.log(ModPower(2,3))


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null
    }
    add(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    serach(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return data
            }
            current = current.next
        }
    }
    insert(data, index) {
        let current = this.head;
        let newNode = new Node(data);
        if (index === 0) {
            newNode.next = current;
            this.head = newNode
        } else {
            let i = 0;
            let previus;
            while (i < index) {
                previus = current;
                current = current.next
                i++;
            }
            newNode.next = current;
            previus.next = newNode;
        }
    }
}

/// Tree & Graph

class Tree {
    constructor() {
        this.Map = {};
    }
    addVertix(vertix) {
        if (!this.Map[vertix]) {
            this.Map[vertix] = []
        }
    }
    addEdges(vert1, vert2) {
        this.Map[vert1].push(vert2)
        this.Map[vert2].push(vert1)
    }
    serach(vertix) {
        if (this.Map.hasOwnProperty(vertix)) {
            return this.Map[vertix]
        }
    }
}

// {riorty Queue using Link List}
class PNode {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.next = this.next
    }
}

class PriorityQueue {
    constructor() {
        this.head = null;
    }
    enqueue(data, priority) {
        let newNode = new PNode(data, priority);
        if (!this.head || priority > this.head.priority) {
            newNode.next = this.head;
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next && priority > current.next.priority) {
                current = current.next
            }
            newNode.next = current.next;
            current.next = newNode
        }
    }
    dequeue() {
        let current = this.head;
        this.head = this.head.next;
        return current;
    }
}

// Tree
class TNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class Tree {
    constructor() {
        this.root = null
    }
    add(data) {
        let newNode = new TNode(data);
        if(!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.head , newNode)
        }
    }
    insertNode(node , newNode) {
        if(newNode.data < node.data) {
            if(!node.left) {
                node.left = newNode
            } else {
                this.insertNode(node.left , newNode)
            }
        } else {
            if(!node.right) {
                node.right = newNode
            } else {
                this.insertNode(node.right , newNode)
            }
        }
    }
}


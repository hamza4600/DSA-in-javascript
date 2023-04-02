// First 9 Chapter

// Array
// Linked List and Doubly Linked List and Circular Linked List
// Stack and Queue
// Hash Table
// Dictoinary
// Sets

function Chapter1() {
    // loops 
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    for (var j = 10; j > 0; j--) {
        console.log(j);
    }
    // while loop
    let p = 0;
    while (p++ < 10) {
        console.log("While Loop", p);
        // p++;
    }
    // Math Operations
    let num = 2.112652;
    console.log("Floor", Math.floor(num));
    console.log("toFixed", num.toFixed(2));

    // summ of N
    function N() {
        let sum = 0;
        for (var i = 0; i < 10; i++) {
            sum += i;
        }
        console.log("Sum of N", sum);
    }
    // N();
    function f(num) {
        let product = 1;
        for (var j = num; j >= 1; --j) {
            product *= j;
        }
        console.log("Factorial", product);
    }
    // f(5);
    function Op(arr, n) {
        for (var p = 0; p < arr.length; p++) {
            arr[p] += n;
        }
    }
    let arr = [1, 2, 3, 4, 5];
    Op(arr, 2);
    // console.log("Op", arr);

    // Recusrion
    function RecF(num) {
        if (num === 1) {
            return num
        }
        return num * RecF(num - 1);
    }
    console.log("Recursion", RecF(5));
}
//
// Chapter1()

//recusrion
function F(num) {
    if (num === 1) {
        return num
    }
    return num * F(n - 1);
}

function add(a, b) {
    // using recursion and BIt Operation
    if (b === 0) {
        return a;
    }
    return add(a ^ b, (a & b) << 1);
}
// console.log(add(3, 3));

function sub(a, b) {
    // using recursion and BIt Operation
    if (b === 0) {
        return a;
    }
    return sub(a ^ b, (~a & b) << 1);
}
// console.log(sub(31, 3));

// OOP
function Checking(amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}
function deposit(amount) {
    this.balance += amount;
}
function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance) {
        console.log("Insufficient funds");
    }
}
function toString() {
    return "Balance: " + this.balance;
}
let account = new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString());

// Chapter 2
function Chapter2() {
    // arrays 
    // method  of creating array
    const arr1 = [];
    const arr2 = new Array(10);
    const arr3 = new Array(1, 2, 3, 4, 5);
    // we can store diffrent type of data in array
    function newA() {
        let arrOne = [];
        for (var i = 0; i < 10; i++) {
            arrOne[i] = i + 10;
            // arrOne.push(i+10);
        }
        console.log("Array", arrOne);
    }
    // newA();
    function string() {
        var sentence = "the quick brown fox jumped over the lazy dog";
        var words = sentence.split(" ");
        for (var i = 0; i < words.length; i++) {
            console.log("word: ", i, words[i]);
        }
    }
    // string()
    // aggraition oeration  shallow copy and deep copy array 
    function aggritation() {
        let one = [];
        for (var i = 0; i < 5; i++) {
            one[i] = i;
        };
        let two = one;
        one[0] = 100;
        console.log(two)
    }
    // aggritation()
    function copy(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            arr2[i] = arr1[i];
        }
    }
    function deepCopy() {
        let one = [];
        for (var i = 0; i < 5; i++) {
            one[i] = i;
        }
        var two = [];
        copy(one, two);
        one[0] = 100;

        console.log("Deep Copy", two);
    }
    // deepCopy()
    // split() and toString() convert an arry of words to a string
    // - join() convert an array of words to a string
    // forEach() method
    function forEach() {
        let data = [4, 8, 15, 16, 23, 42];
        data.forEach(function (el) {
            return console.log(el + 10);
        });
    }
    // forEach()
    // reducer() method can also be use on string
    function reducer() {
        let data = [4, 8, 15, 16, 23, 42];
        let sum = data.reduce(function (previous, current, index) {
            return previous + current;
        });
        console.log("reducer", sum);
    }
    // reducer()
    // filter() method
    function filter() {
        let data = [4, 8, 15, 16, 23, 42];
        let evens = data.filter(function (x) {
            return (x % 2 == 0);
        });
        console.log("filter", evens);
    }
    // filter()

    // Two Dimensional Array
    // let twoD = Array.matrix(5, 5, 0);

    Array.matrix = function (numRows, numCols, initial) {
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
    let twoD = Array.matrix(5, 5, 9);
    console.log(twoD);

}

// Chapter2()

function matrix(arr) {
    // average of a columns
    let avarage = 0;
    let sum = 0;
    let all = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        avarage = sum / arr[i].length;
        all += avarage;
        console.log("Avarage of column", i + 1, "=", avarage.toFixed(2));
    }
    all / arr.length;
    console.log("Avarage of all column", all.toFixed(2));
}

const mat = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
// matrix(mat);

// Palindorminal using stack
function Pali(str) {
    let stack = [];
    for (var i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reverWord = "";
    while (stack.length > 0) {
        reverWord += stack.pop();
    }
    if (reverWord === str) {
        return true;
    }
    return false;
}
console.log(Pali("madam"));

function Pali2(str) {
    return str === str.split("").reverse().join("");
}

// Recusrion useing Stack 
function recStack(num) {
    let stack = [];
    while (num > 1) {
        stack.push(num--);
    }
    let product = 1;
    while (stack.length > 0) {
        product *= stack.pop();
    }
    return product;
}
console.log(recStack(5));

// trim method is use to remove white space from string
// radix sort  is use to sort number
function radixSort(arr) {
    let max = Math.max(...arr); // it will return max number in array
    let maxDigit = max.toString().length;
    for (var i = 0; i < maxDigit; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (var j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

// Priority Queue
// items serveed on base of priority 

function PriorityQueue() {
    let collection = [];
    this.printCollection = function () {
        console.log(collection);
    };
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            let added = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };
    this.dequeue = function () {
        let value = collection.shift();
        return value[0];
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return collection.length === 0;
    };
}

// let pq = new PriorityQueue();
// pq.enqueue(["Beau Carnes", 2]);
// pq.enqueue(["Quincy Larson", 3]);
// pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
// pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
// pq.enqueue(["Briana Swift", 2]);
// pq.printCollection();

// pq.dequeue();
// pq.printCollection();

class PriorityQueue2 {
    constructor() {
        this.Item = [];
    }
    enqueue(item) {

        if (this.Item.length === 0) {
            this.Item.push(item);
        }
        else {

            for (var i = 0; i < this.Item.length; i++) {
                if (item[1] < this.Item[i][1]) {
                    this.Item.splice(i, 0, item); // it will add item in array
                    break;
                }
            }
            if (i === this.Item.length) { // at last position
                this.Item.push(item);
            }
        }
    }
    dequeue() {
        return this.Item.shift();
    }
    show() {
        return this.Item;
    }
}

// let pq2 = new PriorityQueue2();
// pq2.enqueue(["Beau Carnes", 2]);
// pq2.enqueue(["Quincy Larson", 3]);
// pq2.enqueue(["Ewa Mitulska-Wójcik", 1]);
// pq2.enqueue(["Ewa Mitulska-Wójcik", 1]);
// pq2.enqueue(["Briana Swift", 2]);
// pq2.enqueue(["Briana Swift 20", 20]);
// pq2.enqueue(["Briana Swift 21", 20]);
// pq2.enqueue(["Briana Swift 21", 20]);
// console.log(pq2.show());


// LINK lIst 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;

    }
    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.length++;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            this.length++;
        }
    }
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    insert(data, index) {
        let current = this.head;
        let newNode = new Node(data);
        if (index === 0) {
            newNode.next = current;
            this.head = newNode;
        }
        else {
            let previous = null;
            let i = 0;
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.length++;
    }
    remove(index) {
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
        }
        else {
            let previous = null;
            let i = 0;
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = current.next;
        }
        this.length--;
    }
    showNode() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);

// ll.showNode();
console.log(ll.search(30));



+// Double link List 
    class DNode {
        constructor(data) {
            this.data = data;
            this.next = null;
            this.previous = null;
        }
    }

class DoubleLink {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(data) {
        let newNode = new DNode(data);
        if (!this.head) {
            this.head = newNode;
            this.length++;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            newNode.previous = current;
            this.length++;
        }
    }
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    find(data) {
        let current = this.head;
        while (current.data !== data) {
            current = current.next;
        }
        return current;
    }
    insert(data, index) {
        let newNode = new DNode(data);
        let current = this.head;
        if (index === 0) {
            newNode.next = current;
            current.previous = newNode;
            this.head = newNode;
        }
        else {
            let current = this.find(data);
            newNode = current.next; // means new node is next of current node
            newNode.previous = current; // means new node previous is current node
            current.next = newNode; // means that current.next is newNode
        }
        this.length++;
    }
}

// let dll = new DoubleLink();
// dll.add(10);
// dll.add(20);
// dll.add(30);

// dll.insert(40, 1);
// console.log(dll)
// console.log(dll.find(30));

//Circulat LinkList 

class CNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLink {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(data) {
        let newNode = new CNode(data);
        if (!this.head) {
            this.head = newNode;
            this.head.next = this.head;
            this.length++;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
            this.length++;
        }
    }
    find(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return false;
    }
    showAllNode() {
        let current = this.head;
        while (current.next !== this.head) {
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data);
    }
    insert(data, index) {
        let newNode = new CNode(data);
        let current = this.head;
        if (index >= 0 && index <= this.length) {
            console.log("index is not valid");
            if (index === 0) {
                if (this.head === null) {
                    this.head = newNode;
                    this.head.next = this.head;
                } else {
                    newNode.next = current;
                    current = this.head;
                    while (current.next !== this.head) {
                        current = current.next;
                    }
                    current.next = newNode;
                    this.head = newNode;
                }
            } else {

                let previous = null;
                let i = 0;
                while (i < index) {
                    previous = current;
                    current = current.next;
                    i++;
                }
                newNode.next = current;
                previous.next = newNode;
            }
            this.length++;
        }
    }
}

// let cl = new CircularLink();
// cl.add(10);
// cl.add(20);
// cl.add(30);
// cl.add(40);
// cl.add(50);


// cl.insert(60, 0);
// cl.showAllNode();
// console.log(cl.find(50));

// Dictonary 
// store key value pare Data it work like object or map or hash table 
class Dictonary {
    constructor() {
        this.items = {};
    }
    hashFun(key) {
        return key.toString().length % 37;
    }
    add(key, value) {
        let position = this.hashFun(key);
        if (this.items[position] === undefined) {
            this.items[position] = value;
        }
        else {
            while (this.items[position] !== undefined) {
                position++;
            }
            this.items[position] = value;
        }
    }
    remove(key) {
        let position = this.hashFun(key);
        if (this.items[position] !== undefined) {
            delete this.items[position];
            return true;
        }
        return false;
    }
    search(key) {
        let position = this.hashFun(key);
        if (this.items[position] !== undefined) {
            return this.items[position];
        }
    }
    allValues() {
        return this.items;
    }
}

// let dic = new Dictonary();
// dic.add("name", "sajjad");
// dic.add("age", 25);
// dic.add("city", "karachi");
// dic.add("country", "pakistan");
// dic.add("last", "sajjad Khan");

// console.log(dic.allValues());
// console.log(dic.search("name"));


// Colloison in Hash Table 
// can be respolve by two way
// 1. Seperate Chaining
// 2. Linear Probing
// Open Addressing
// double hashing
// Quadratic Probing

// By using array we can implement Hash Table and also we can use linked list to implement Hash Table and by object we can implement Hash Table
class HashTable {
    constructor() {
        this.table = new Array(137);
    }
    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i); // return ascii value of char
        }
        return total % this.table.length;
    }
    betterHash(data) {
        const H = 37;
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total); // return integer value
    }
    // hashing interger value
    hashInt(data) {
        let random = Math.floor(Math.random() * 100);
        return data * random % this.table.length;
    }
    add(data) {
        let pos = this.betterHash(data);
        if (this.table[pos] === undefined) {
            this.table[pos] = data;
        }
        else {
            while (this.table[pos] !== undefined) {
                pos++;
            }
            this.table[pos] = data;
        }
    }
    showAll() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(i + " : " + this.table[i]);
            }
        }
    }
}

// let hash = new HashTable();

// hash.add("sajjad");
// hash.add("sajjad");
// hash.add("sajjad");

// hash.showAll();
// console.log(typeof hash);


// sets 
// it is collection of unique value
// it is not allow duplicate value

class Set {
    constructor() {
        // this.items = {};
        this.Item = [];
    }
    // add unique value to set
    add(value) {
        if (this.Item.includes(value)) {
            return false;
        }
        else {
            // this.items[value] = value;
            this.Item.push(value);
            return true;
        }
    }
    // remove value from set
    remove(value) {
        if (this.Item.includes(value)) {
            // delete this.items[value];
            this.Item.splice(this.Item.indexOf(value), 1);
            return true;
        }
        return false;
    }
    contain(value) {
        if (this.Item.indexOf(value) > -1) {
            return true;
        }
        return false;
    }
    subSet(set) {
        if (this.Item.length > set.Item.length) {
            return false;
        }
        else {
            for (let i = 0; i < this.Item.length; i++) {
                if (!set.contain(this.Item[i])) {
                    return false;
                }
            }
            return true;
        }
    }
}

// let set = new Set();
// set.add(10);
// set.add(20);
// set.add(30);
// set.add(40);
// set.add(50);
// set.add(60);

// let set2 = new Set();
// set2.add(10);
// set2.add(20);
// set2.add(30);
// set2.add(40);
// set2.add(50);
// set2.add(60);

// console.log(set.subSet(set2));

// console.log(typeof set);
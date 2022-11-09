// Problum soving 
// Modular Operator 
// for very Big number  when working on bist is very efficent
function Modular(a, b) {
    let result = 1;
    while (b > 0) {
        if ((b & 1) !== 0) { // it number is odd very fast 
            result = result * a;
        }
        a = a * a;
        b = b >> 1; // divide by 2
    }
    return result;
}

// console.log(Modular(2, 10));

function fastPower(a, b, n) { // n is moduler
    let result = 1;
    while (b > 0) {
        if ((b & 1) !== 0) { // it number is odd very fast 
            result = (result * a % n) % n; // math property
        }
        a = (a % n * a % n) % n;
        b = b >> 1;
    }
    return result;
}

// console.log(fastPower(3975432, 5, 1000000007));


// Recusive

function Recu(n) {
    if (n === 1) {
        return 1;
    }
    let sum = 0;
    sum = n + Recu(n - 1);
    return sum;
}

// console.log(Recu(5));
function Power(a, b) {
    if (b === 0) {
        return 1;
    }
    let ans = a * Power(a, b - 1);
    return ans;
}

// console.log(Power(2, 10));

// Numbe of ways in n*m matrix

function matrix(arr) {
    let n = arr.length;
    let m = arr[0].length;

    if (n === 1 || m === 1) {
        return 1;
    }
    let ans = matrix(arr.slice(1)) + matrix(arr.slice(0, n - 1));
    return ans;
}

console.log(matrix([[1, 1, 1], [1, 1, 1], [1, 1, 1]]));

// SOrt an Array using Recursion

function sort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let temp = arr.pop();
    sort(arr);
    insert(arr, temp);
    return arr;
}

function insert(arr, temp) {
    if (arr.length === 0 || arr[arr.length - 1] <= temp) {
        arr.push(temp);
        return;
    }
    let val = arr.pop();
    insert(arr, temp);
    arr.push(val);
}

// console.log(sort([10, 200, 30, 40, 5, 6, 7, 8, 9, 10]));

// Josephus Problem

function josephus(n, k) {
    if (n === 1) {
        return 0;
    }
    let x = josephus(n - 1, k);
    let y = (x + k) % n;
    // return (jos(n - 1, k) + k) % n;
    return y;
}

// console.log("Fire",josephus(5, 3));

// Palindrome

function Palindrome(str) {
    if (str.length === 0) {
        return true;
    }
    let first = str[0];
    let last = str[str.length - 1];
    if (first !== last) {
        return false;
    }
    let ans = Palindrome(str.slice(1, str.length - 1));
    return ans;
}

function Pali2(str) {
    let start = str[0];
    let end = str[str.length - 1];
    while (start <= end) {
        if (start !== end) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
// console.log(Pali2("abba"));  
// console.log(Palindrome("abba"));

// Subsequence using Recursion
function Subseq(str) {
    if (str.length === 0) {
        return [""];
    }
    let ch = str[0];
    let ans = Subseq(str.slice(1)); // it will return array of string
    let myAns = [];
    for (let i = 0; i < ans.length; i++) {
        myAns.push(ch + ans[i]);
    }
    return myAns.concat(ans);

}

console.log(Subseq("abc"));

// implement a queue using stack?

class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(val) {
        this.stack1.push(val);
    }
    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}


// implement stack using queues? 

class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    push(val) {
        this.queue1.push(val);
    }
    pop() {
        if (this.queue1.length === 0) {
            return;
        }
        while (this.queue1.length !== 1) {
            this.queue2.push(this.queue1.shift());
        }
        let ans = this.queue1.shift();
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
        return ans;
    }
}



// Three-dimensional array: A three-dimensional array is a grid that has rows, columns, and depth as a third dimension. It comprises a cube with rows, columns, and depth as a third dimension. 

const arrThree = [
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ],
    [
        [19, 20, 21],
        [22, 23, 24],
        [25, 26, 27]
    ]
];


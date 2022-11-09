//
function sum(a) {
    if (a === 0) {
        return 0
    }
    return a + sum(a - 1)
}

function factorial(n) {
    if (n === 1) return 1;

    return n * factorial(n - 1)
}

// / for Loop 
function fibo(n) {
    if (n <= 1) return n;
    let a = 0;
    let b = 1;
    let c = 0

    for (var i = 0; i < n; i++) {
        c = a + b;
        b = a;
        a = c;
    }
    return c
}

// Recursively 
function reFibo(n) {
    if (n <= 1) return n;

    return reFibo(n - 1) + reFibo(n - 2);
}
// console.log(fibo(10))


// Pascal triangel 
function Pascal(row, col) {

    if (row === 0) return 1;
    if (col === 0) return 0;

    return Pascal(row - 1, col) + Pascal(row - 1, col - 1);
}


console.log(Pascal(5, 2))

// converto to binary 
function binary(n) {
    let str = "";
    function converter(n) {
        if (n < 2) {
            str += n;
            return
        } else {
            converter(Math.floor(n / 2));
            converter(n % 2);
        }
    }
    converter(n);
    return str
}
// console.log(binary(150980))

// All Palidrinomail Sol
function pali(str) {
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
// 
function Pali2(str) {
    let start = str[0];
    let end = str[str.length];
    while (start < end) {
        if (str[start] !== str[end]) {
            return false
        }
        start++;
        end--
    }
    return true
}
// recusrion 
function PaliRe(str) {
    if (str.length === 0) {
        return true;
    }
    let start = str[0];
    let end = str[str.length - 1];
    if (start !== end) {
        return false
    }
    let anser = PaliRe(str.slice(1, str.length - 1))
    return anser
}

console.log(pali("aba"))

// all permutation of an array using recursion

function permute(arr) {
    let result = [];
    function helper(arr, temp) {
        if (arr.length === 0) {
            result.push(temp)
        }
        for (var i = 0; i < arr.length; i++) {
            let newTemp = temp.slice();
            newTemp.push(arr[i]);
            let newArr = arr.slice(0, i).concat(arr.slice(i + 1))
            helper(newArr, newTemp)
        }
    }
    helper(arr, [])
    return result;
}
console.log(permute(['A', 'B', 'C']))

// flattern and Object

function flatten(obj) {
    let result = {};
    function helper(obj, temp) {
        for (var key in obj) {
            if (typeof obj[key] === "object") {
                helper(obj[key], temp + key + ".")
            } else {
                result[temp + key] = obj[key]
            }
        }
    }
    helper(obj, "")
    return result;
}

// console.log(flatten({ a: 1, b: { c: 2, d: 3 }, e: 4 }))

// sets  

function Sset() {
    const aa = new Set();
    aa.add(1)
    aa.add(2)
    aa.add(3)
    aa.add(4)
    aa.add(5)
    aa.add(1);
    aa.add(2);

    console.log(aa)
}
Sset()

// using Set for duplication in array 
function dup(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
}

// return unique value in array

function unique(arr1 , arr2) {
    let set = new Set(arr1.concat(arr2));
    return Array.from(set);
}

//
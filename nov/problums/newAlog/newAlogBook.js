// New aLGO bOOK
function logrith(n) {
    for (var i = 2; i < n; i = i * 2) {
        console.log(i)
    }
}
// few steps  to react Very big n
// logrith(10000)

// 2n  alfo 
function twoN(n) {
    let aa = 0;
    for (var i = 0; i <= n; i++) {
        aa += i
    }
    for (var i = 0; i <= n; i++) {
        aa += i
    }
    return aa >> 1
}
// console.log(twoN(10))

// conspare two Object 
function compare(a, b) {
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

// console.log(compare([1,2,3,4,5], [1,2,3,4,5,6]))
// compare Obejct   

function objComp(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (var key in a) {
        if (a[key] !== b[key]) return false;
    }
    return true;
}

// console.log(objComp({a:1, b:2, c:3}, {a:1, b:2, c:3}))

function math() {
    let a = Number.MAX_SAFE_INTEGER + 1;
    let b = Number.MIN_SAFE_INTEGER;
    let c = Number.POSITIVE_INFINITY
    console.log(b < c)
    return Math.ceil(0.45)
}
// console.log(math())

function isPrime(n) {

    if (n <= 1) return false; // 1 is not prime number

    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function time(fn) {
    // show time take by function to run
    console.time('time')
    console.log('Value', fn);
    console.timeEnd('time')
}

// time(isPrime(101545156545656))

function obtimizPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if ((n & 1) === 0 || n % 3 === 0) return false;

    for (var i = 5; i * i <= n; i = i + 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// time(obtimizPrime(1015451565456569))

function primefactorial(n) {
    while (n % 2 === 0) {
        console.log(2);
        n = n / 2;
    }
    // for odd number
    for (var i = 3; i * i <= n; i = i + 2) {
        while (n % i === 0) {
            console.log(i);
            n = n / i;
        }
    }
    //  if n is prime number
    if (n > 2) {
        console.log(n);
    }
}

// primefactorial(114894545452)

function Power(x, y) {
    if (y === 0) return 1;
    let temp = Power(x, parseInt(y / 2));
    if (y % 2 === 0) {
        return temp * temp;
    } else {
        return x * temp * temp;
    }
}

function Powe(a, b) {
    // in bits 
    if (b === 0) return 1;
    let temp = Powe(a, b >> 1);
    if (b & 1 === 0) {
        return temp * temp;
    }
    return a * temp * temp;
}

// console.log(Powe(2, 3))
function isPrimes(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) {
        return false
    }

    for (var i = 5; i * i <= n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false
        }
    }
    return true;
}
function lessThanN(n) {
    for (var i = 0; i < n; i++) {
        if (isPrimes(i)) {
            console.log(i)
        }
    }
}

// lessThanN(15)

function upglyNu(n) {
    for (var i = 1; i < n; i++) {
        if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i === 1) {
            console.log(i)
        }
    }
    return false
}
// upglyNu(16)

function whil(n) {
    while (0 < n) {
        console.log(" ", n)
        n--
    }
}
// whil(10)

function forEa(arr) {
    return Array.isArray(arr) && arr.forEach(function (item, index) {
        console.log(item)
        // console.log(arr[index])
    })
}
const a = [1, 2, 3, 4, 5, 66, 5, 5, 9, 59, 5, 9, 5, 4, 4]
// forEa(a)

function splic() {
    const aa = [1, 2, 66, 5, 5, 9, 59, 5, 9, 5, 4, 4]
    aa.splice(0, 0, "Hamza")
    return aa
}
// console.log(splic())

// Linear 
function findSum(arr, w) {
    let sum = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        sum = arr[start] + arr[end];
        if (w === sum) {
            return console.log(arr[start], arr[end])
        }
        start++
    }
    return false
}
// Brute force
function sumA(arr, w) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (w === arr[i] + arr[j]) {
                return [i, j]
            }
        }
    }
    return -1
}

// Hash Map 
function SummA(arr, w) {
    let storage = {}  // declaring our storage hash
    for (const num of arr) {
        const comp = w - num

        console.log(w - num)

        if (comp in storage) {
            return [comp, num]
        } else {
            storage[num] = true  // storing the integer in our hash
        }
    }

    return [] // if no mat
}
let qw = [1, 2, 3, 4, 5, 10]
// console.log(SummA(qw, 9))

function mediumA(arr) {
    let length = arr.length;

    if (length % 2 == 1) {
        return arr[Math.floor(length / 2)]
    }
    else {
        return arr[length / 2]
    }
}

// console.log(mediumA(qw))

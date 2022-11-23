// Bist manupulations
// &	AND	Sets each bit to 1 if both bits are 1
// |	OR	Sets each bit to 1 if one of two bits is 1
// ^	XOR	Sets each bit to 1 if only one of two bits is 1
// ~	NOT	Inverts all the bits
// <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

// check if Num is Odd
function isOdd(num) {
  return (num & 1) === 1;
}

console.log("isOdd", isOdd(2));

// arry of num every num appers twice except one return that num
// using XOR
// 1 ^ 1 = 0
// 0 ^ 0 = 0
// 1 ^ 0 = 1
// using And
// 1 & 1 = 1
// 0 & 0 = 0
// 1 & 0 = 0
// using OR
// 1 | 1 = 1
// 0 | 0 = 0
// 1 | 0 = 1

function everyNum(arr) {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    num = num ^ arr[i];
  }
  return num;
}
console.log(
  "everyNum",
  everyNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8])
);

// check if num is power of 2
// it works like  10 & (10 - 1) = 0

function isPowerOfTwo(num) {
  return (num & (num - 1)) === 0;
}
console.log("isPowerOfTwo", isPowerOfTwo(8));

// Find i bit of a number
function findIBit(num, i) {
  return (num & (1 << i)) > 0;
}

console.log("findIBit", findIBit(8, 8));

// set i bit of a number
// how it works
// 8 = 1000
// 1 << 8 = 100000000
// 1000 | 100000000 = 100000000
// 264
function setIBit(num, i) {
  return num | (1 << i);
}
console.log("setIBit", setIBit(8, 8));

// find the position of rightmost set bit
// 8 = 1000
// 8 - 1 = 7 = 0111
// 1000 & 0111 = 0000
// 0000 = 0
// 8 - 0 = 8
function findRightMostSetBit(num) {
  return num & ~(num - 1);  // ~ is used to 
}
console.log("findRightMostSetBit", findRightMostSetBit(8));

// Simply couts Num of tiem aitem is repeted
function thrice(arr) {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 3) {
      return arr[i];
    }
  }
  return -1;
}

console.log(
  "thrice",
  thrice([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9])
);

// Find the missing number
// using sum
function missingNum(arr) {
  var n = arr.length + 1;
  var sum = (n * (n + 1)) / 2;
  var arrSum = 0;
  for (var i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return sum - arrSum;
}
console.log(
  "missingNum",
  missingNum([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
);

// using XOR
function missingNum2(arr) {
  var n = arr.length + 1;
  var x1 = 0;
  var x2 = 0;
  for (var i = 0; i < arr.length; i++) {
    x1 = x1 ^ arr[i];
  }
  for (var i = 1; i <= n; i++) {
    x2 = x2 ^ i;
  }
  return x1 ^ x2;
}
console.log(
  "missingNum2",
  missingNum2([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
);

// reverse bits
function reverseBits(n) {
  var res = 0;
  for (var i = 0; i < 32; i++) {
    res = res << 1;
    res = res | (n & 1); // same as res = res + (n & 1) n & 1 is 1 if last bit is 1
    n = n >> 1; // is same as n = n / 2
  }
  return res;
}
console.log("reverseBits", reverseBits(8));

// find the nth magic number
// magic number 
function magicNum(n) {
  let ans = 0;
  let base = 5;
  while (n > 0) {
    // loops run for set bits of n  for example 3 = 011  it runs 3 times
    let last = n & 1;
    n = n >> 1;
    ans += last * base;
    base = base * 5;
  }
  return ans;
}
// complexity is log(n)
console.log("magicNum", magicNum(6));

// No of digits in binary

function noOfDigits(n) {
  let base = 2;
  let ans = Math.log(n) / Math.log(base) + 1;
  return ans;
}
console.log("noOfDigits", noOfDigits(41));

// add nums using bit manipulation
function add(a, b) {
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}
console.log("add", add(100, 100));

// sum of n row in Passcal triangle using bit manipulation
function sumOfRow(n) {
  let ans = 1 << (n - 1);
  return ans;
}
console.log("sumOfRow", sumOfRow(5));

// Calculate Power of a number using bit manipulation
function power(base, power) {
  let ans = 1;
  while (power > 0) {
    if ((power & 1) === 1) {
      ans *= base;
    }
    base *= base;
    power = power >> 1;
  }
  return ans;
}
console.log("power", power(2, 3));

//  find numbers of set bits in a number
function noOfSetBits(n) {
  let count = 0;
  while (n > 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}

// flipping a image

var flipAndInvertImage = function (A) {
  for (let i = 0; i < A.length; i++) {
    A[i].reverse();
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] === 0) {
        A[i][j] = 1;
      } else {
        A[i][j] = 0;
      }
    }
  }
  return A;
};
// test case
console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);

// Or a number
function or(a, b) {
  return a | b;
}

// Bit Opertaors
function And(num) {
  return (num & 1) === 1;
}
console.log("Number is even", And(13));

// Or a number
// if we or any num with 1 it will add one to that number and | with 0 return num
// if  num are same then return that num
// if num are different then it return
function Or(a, b) {
  return a | b;
}
console.log("Orrr", Or(10, 250));

// .. Lef SHift
function leftShift(num) {
  return num << 1;
}
console.log("Double numer ", leftShift(50));

function leftNum(a, b) {
  return a << b;
}

console.log("multiply number by Second ", leftNum(50, 10));

// RRight Shift
function rightShift(num) {
  return num >> 1;
}
console.log("Divide numer by 2 ", rightShift(5057));

function rightNum(a, b) {
  return a >> b;
}
console.log("Divide numer number by Second", rightNum(50, 10));

// XOR number
function xor(num) {
  return num ^ 5;
}
console.log("XOR", xor(10));
// if we xor num with same it become zero and with differnt num will add that num

// 
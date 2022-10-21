// Project euler problums
// first problum
const sumOfMultiples = (num) => {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumOfMultiples(100));

//  simple fibonachi
function fibnonchi(num) {
  let a = 0;
  let b = 1;
  let c;
  for (let i = 0; i < num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return a;
}
console.log(fibnonchi(10));

// Even fionanchi
function evenFibnonchi(num) {
  let a = 0;
  let b = 1;
  let c;
  let sum = 0;

  for (var i = 0; i < num; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
    if (c % 2 === 0 && c > 0) {
      sum += c;
    }
  }
  return sum;
}
// console.log(evenFibnonchi(10));

//Prime Numbers
// Prime Numbers are numbers that are only divisible by 1 and themselves
function primeNumbers(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1; // means true
}
console.log(primeNumbers(7));

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i !== 0) {
      return console.log(` ${num} `, "is  prime");
    }
  }
  return console.log(` ${num} `, "is not prime");
}
isPrime(17);

// find factor of a number
function factor(num) {
  let factor = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
    }
  }
  // creat the pairs of the factors
  let pairs = [];
  let start = 0;
  let end = factor.length - 1;
  while (start <= end) {
    pairs.push([factor[start], factor[end]]);
    start++;
    end--;
  }
  return pairs;
}
// console.log(factor(20));

// prime factors of 13195 are 5, 7, 13 and 29
// largest prime factor of 13195 is 29
function largestPrimeFactor(num) {
  var arr = [];
  let max = 0;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      let sum = i;
      arr.push(i);
      if (sum > max) {
        max = sum;
      }
    }
  }
  return [arr, max];
}
// console.log(largestPrimeFactor(13195));

// Palidrominal Number
// both ways are same
function isPalidromial(num) {
  let start = 0;
  let end = num.length - 1;
  while (start <= end) {
    if (num[start] === num[end]) {
      return true;
    }
    start++;
    end--;
  }
  return false;
}
// console.log(isPalidromial('madam'), "Palidromial" )

function randomPalidromial(num) {
  // return the largest palidromial number
  let max = 0;
  let start = 0;
  let end = num;
  let arr = [];
  while (start <= end) {
    console.log(start, end);
    if (start * end === num) {
      max = start * end;
      arr.push([start, end]);
    }
    start++;
    // end--;
  }
  return [max, arr];
}
console.log(randomPalidromial(100));

// Probulm 4
// Largest Paridromial Product
function largestPalindrome() {
  var arr = [];
  for (var i = 999; i > 100; i--) {
    for (var j = 999; j > 100; j--) {
      var mul = j * i;
      if (isPalin(mul)) {
        arr.push(j * i);
      }
    }
  }

  return Math.max.apply(Math, arr);
}

function isPalin(i) {
  return i.toString() == i.toString().split("").reverse().join("");
}

console.log(largestPalindrome());


// Find pivot Index
// Given an array of integers nums, write a method that returns the "pivot" index of this array.
function pivotI(num){
  let sum = 0;
  let leftSum = 0;
  for(let i = 0; i < num.length; i++){
    sum += num[i];
  }
  for(let i = 0; i < num.length; i++){
    if(leftSum === sum - leftSum - num[i]){
      return i;
    }
    leftSum += num[i];
  }
  return -1;
}

// Find Middle Index
// Input [2,3,-1,8,4]
// Output 3
function middIndex(nums){
  let sum = 0;
  let leftSum = 0;
  for(let i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  for(let i = 0; i < nums.length; i++){
    if(leftSum === sum - leftSum - nums[i]){
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}
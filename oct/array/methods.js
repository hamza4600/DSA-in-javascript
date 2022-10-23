// all build in methods in javascript with examples
// map()
var num = [1, 2, 3, 4, 5];
var double = num.map((arr) => {
  return arr * 2;
});
// returns double of all elemnts [2,4,6,8,10]
console.log(double);
// sort
// it use quick sort algorithm behind the scences with power O(nlogn)
let numS = [3, 2, 6, 8, 1];
num.sort();
console.log(numS); //returns sorted array [1,2,3,6,8]

// filter usecases:
var numF = [3, 4, 5, 6, 7, 8];
var filterFn = (arr) => arr.filter((el) => el > 5); // returns numbers > 5 [6,7,8]
//reverse
var numR = [1, 2, 3, 4, 5];
var reversed = numR.reverse();
console.log(reversed); // returns reverse array [5,4,3,2,1]

//some() method
var numFn = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var someFn = (arr) => arr.some((es) => es > 3); // numbeers greater than 3 are present or not(true/false)
console.log(someFn(numFn)); // returns true at after check first occurance

//concat()
var str1 = ["hello", "sup"]; // str1 is concatinated with str2 // [ "hello","sup",2.718,3.1415,9.8]
var str2 = [2.718, 3.1415, 9.8];
var concatStrFn = (arr1, arr2) => arr1.concat(arr2);
console.log(concatStrFn(str1, str2));

//reduce
// takes first element as accumulator
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var reducedNum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(reducedNum); // returns 45 as the sum of all elements

// reduceRight
// similar to reduce except it does from right instead of left
var reduceRightFn = numbers.reduceRight((acc, currentVal) => {
  return acc + currentVal;
});
console.log(reduceRightFn); // returned 45 as the sum from right to left

//lastIndexOf
// returns index of in
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lastIndexOf = n.lastIndexOf(9, 9);
console.log(lastIndexOf); // returns last index of 9 which is 8

// push

var num = [1, 2, 3, 4];
var pushFn = (arr) => arr.push(7); // returns length of array after push
console.log(pushFn(num));

//pop
var num = [1, 2, 3, 4];
var pushFn = (arr) => arr.pop(); // drops right most elemet from array and returns it
console.log(pushFn(num));

// slice
var sliceFn = (arr) => arr.slice(1, 3); // returns elements from index 1 to 3
console.log(sliceFn(num));





// from(fromArraybuffer)
// converts arraybuffer to array
let buffer = new ArrayBuffer(8); //  allocates 8 bytes of memory
let smallerBuff = buffer.slice(0, 4); // takes slice of it
let arrayBuffer = new Uint8Array(buffer);
console.log(arrayBuffer);

//search()
var str = "hello";
var searchStr = str.search("hello"); // i think it give index of "hello"
console.log(searchStr); // returns index after checking it is present or not

// includes(searchElement,fromIndex)
var includesFn = (str) => str.includes("el"); // checks hello to includes el or not
console.log(includesFn(str));

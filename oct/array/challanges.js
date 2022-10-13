// find max till i in array

function maxTillI(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
     
      
  }
}

// subarray is continuse part of array 
// subsequence derived from an array by selecting zero and more  element without changing their their position 
// No of subsequencial of an array are 2^n
// every subarray is subsequencie  but subsequience in not a subarray


// output sum of each subarray of given array 
// input [1,2,3]
// output [1,3,6,2,5,8,3,6,9]

// 
function subSequenceArray(arr) {
  //write number of subarray
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      count+=arr[j];
      console.log(arr.slice(i, j + 1));
      // console.log((i, j + 1)); // will print out the sum 
    }
  }
  return count;
}
console.log(subSequenceArray([1, 2, 0 , 7, 2]));


// arthematic array is a array in which the difference between the consecutive element is same
// longest artehmetic subarray problum

// input [1,2,3,4]
// output 4
function longestArthematicSubArray(arr) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === arr[i + 2] - arr[i + 1]) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  return max + 2;
}
console.log("Longest artematic sunarray")
console.log(longestArthematicSubArray([10,7,4,6,8,10,11]));


//  find repeated element in array of small number
//  input [1,2,3,4,5,6,7,8,9,10,1 , 10]
// output is 1 only

function repeatedElement(arr) {
  let repet =[];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        repet.push(arr[i]);
      }
    }
  }
  // return repet;
  // now we have array of repeated element
  // show the element which is repeated more than once
  let min = repet[0];
  for(let i = 0; i < repet.length; i++){
    // smallest item in array
    for(let j = i + 1; j < repet.length; j++){
      if(min > repet[j]){
        min = repet[j];
      }
    }
  }
  return min;
}
console.log("Repeated element in array");
console.log(repeatedElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 10]));

//  now we wil print out the index postion of the repeated element
function repeatedElementIndex(arr) {
  let repet =[];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        repet.push(i);
      }
    }
  }
  // return repet;
  // now we have array of repeated element
  // show the element which is repeated more than once
  let min = repet[0];
  for(let i = 0; i < repet.length; i++){
    // smallest item in array
    for(let j = i + 1; j < repet.length; j++){
      if(min > repet[j]){
        min = repet[j];
      }
    }
  }
  return min;
}

console.log("Repeated element in array");
console.log(repeatedElementIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 10]));

// unsorted array A of size n , find the continuse subarray which add to a given number S
// input [1,2,3,7,5] , S = 12
// output [2,3,7]

function continuseSubArray(arr, S) {
  let sum = 0;
  let start = 0;
  let end = 0;
   while (end < arr.length) {
    if (sum < S) {
      sum += arr[end];
      end++;
    } else if (sum > S) {
      sum -= arr[start];
      start++;
    } else {
      return arr.slice(start, end);
    }
  }
}
console.log("Continuse subarray");
console.log(continuseSubArray([6,6,1, 2, 3, 7, 5], 12));

// find the smallest positive missing number in array
// input [0,-10,1,3,-20]
// output 2
function missingNumber(arr) {
  let min = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min) {
      min++;
    }
  }
  return min;
}
console.log("Missing number");
console.log(missingNumber([0, -10, 1, 3, -20]));

// can also solve it with check array
// input [0,-10,1,3,-20]
// output 2
function missingNumberCheckArray(arr) {}  
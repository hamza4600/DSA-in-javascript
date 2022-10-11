// find max and min num in array
function maxMin(arr) {
  // check if item in array are number
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "please enter number";
    }
    break;
  }

  // find max and min
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return `Max is ${max} and Min is ${min}`;
}

// test
// console.log(maxMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// find item in array

function findItem(arr, item) {
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === item) {
      return 1;
    }
  }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// test
console.log(findItem(arr, 10));

// find index of item in array
function findIndex(arr, item) {
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
}
// test

console.log(findIndex(arr, 10));

// find item in array if present return true else false
function findItem(arr, item) {
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}
// test
console.log(findItem(arr, 100));

// Above approach is called linear search

// now we will see binary search

// binary search is only for sorted array
// binary search is faster than linear search binary search is divide and conquer algorithm
// items in array must be sorted
// time complexity of binary search is O(log2 n)

function binarySeaarch(arr , n) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === n) {
        return true;
        } else if(arr[mid] < n) {
        start = mid + 1;
        } else {
        end = mid - 1;
        }
    }
    return false;
}

// test
console.log(binarySeaarch(arr, 10));

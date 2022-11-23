// binary search
function binarySearch(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === n) {
      return true;
    } else if (arr[mid] < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return true;
}

// find item index
function findIndex(arr, i) {
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] === i) {
      return true;
    }
  }
  return false;
}

// find max and Min value in array
function Maxmin(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max, min;
}

// Practice Day Four
// factorial
function factorial(n) {
  let num = 1;
  for (var i = 1; i <= n; i++) {
    num *= i;
  }
  return num;
}

// Richest country OR sub array having largest sum
function subArraySum(arr) {
  let max = 0;
  for (var i = 0; i < arr.length; i++) {
    let sum = 0;
    for (var j = 0; j <= arr[i].length; i++) {
      sum += arr[i][j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// writte No od sum arrays from a array
function subArrays(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      console.log(arr.slice(i, j + 1));
    }
  }
}
// console.log(subArrays([1, 2, 0 , 7, 2]));
// returna all posible  sub arrays

// longest arthematic sub array
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
console.log("Longest artematic sunarray");
console.log(longestArthematicSubArray([10, 7, 4, 6, 8, 10, 11]));

// repeated item in array
function Repeated(arr) {
  let num = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        num.push(arr[i]);
      }
    }
  }
  // now we can also apply any other condition if we wanted
  // for smallest
  let min = num[0];
  for (var k = 0; k < num.length; k++) {
    if (num[k] < min) {
      min = mun[k];
    }
  }
  return min;
}
console.log("Smallest");
console.log(Repeated([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 10]));

// find item of array that will give sum of N
// while loop run up to length of arr || add all items in sum also end if sum become larger than N then start subtracting from sum and also add start
function sumArr(arr, S) {
  let start = 0;
  let end = 0;
  let sum = 0;
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
console.log(sumArr([6, 1, 2, 3, 7, 5], 12));


// coding Challange LeetCode
// determine  if two events have conflict
// 1. if start time of one event is less than end time of other event
// 2. if end time of one event is greater than start time of other event
// event1 = ["01:15", "02:00"] event2 = ["02:00", "03:00"]
//  true
// because two events intersect at time 02:00
// example 2
// evelt 1 =[ "10:00", "11:00"] event2 = ["14:30", "15:30"]
// false
// because two events do not intersect
var haveConfits = function (event1, event2) {
  //constarins
  // event1 and event2 are arrays of length 2
  // event1[i].length == event2[i].length == 5
  // stratTime1 <= endTime1
  // startTime2 <= endTime2

  // solution
  // 1. if start time of one event is less than end time of other event
  // 2. if end time of one event is greater than start time of other event
  // event1 = ["01:15", "02:00"] event2 = ["02:00", "03:00"]
  //  true
  // because two events intersect at time 02:00
  // example 2
  // code
  return (
    (event1[0] <= event2[0] && event2[0] <= event1[1]) ||
    (event1[0] <= event2[1] && event2[1] <= event1[1]) ||
    (event2[0] <= event1[0] && event1[0] <= event2[1]) ||
    (event2[0] <= event1[1] && event1[1] <= event2[1])
  );
};

// Number of subarray with GDC equal to  k
//  1. find all subarrays
//  2. find GDC of each subarray
//  3. count subarrays with GDC equal to k
//  4. return count

var subArrayGDC = function (nums, k) {
  function GDC(a, b) {
    if (b === 0) return 0;
    return GDC(b, (a % b));
  }
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let gdc = nums[i];
    for (let j = i; j < nums.length; j++) {
      gdc = GDC(gdc, nums[j]);
      if (gdc === k) {
        count++;
      }
    }
  }

  return count;
};

// test
console.log(subArrayGDC([9, 3, 1, 2, 6, 3], 3));

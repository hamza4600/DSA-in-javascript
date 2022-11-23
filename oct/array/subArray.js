//subarray is a continuse part of array
// { 10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100 }
// { 40, 50, 60 }

function subArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      console.log(arr.slice(i, j + 1));
    }
  }
}

console.log("subarray", subArray([10, 20, 30, 40, 50, 80, 90, 100]));

// maximum sum of subarray // brute force
function maxSumSubArray(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    for (var j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

console.log("maximum sum of subarray", maxSumSubArray([-1, 4, 7, 2]));

// maximum sum of subarray // kadane's algorithm
// it simply means that if the sum is negative then we will not add it to the sum and we will start the sum from the next element
function maxSumSubArray(arr) {
  var max = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

console.log("maximum sum of subarray", maxSumSubArray([-1, 4, 7, 2]));

//  cumalative sum of subarray
// in cumalative sum we add the previous sum with the current element
function cumalativeSumSubArray(arr) {
  var newArray = [];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    newArray.push(sum);
  }
  return newArray;
}

console.log(
  "cumalative sum of subarray",
  cumalativeSumSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

// Maximun Circular Subarray Sum
// Max subArray Sum = total sum of array - sum of non contributing elements

function maxCircularSubArraySum(arr) {
  // Kadien Algorithm
  const kadanes = (arr) => {
    let currentSum = 0;
    let maxSum = 0;
    for (var i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      if (currentSum < 0) {
        currentSum = 0;
      }
      maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
  };

  // Opertaions
  let wrapSum = 0;
  let nowrapSum = 0;
  nowrapSum = kadanes(arr);
  let totalSum = 0;
  for (var i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    arr[i] = -arr[i];
  }
  wrapSum = totalSum + kadanes(arr);
  return wrapSum;
  // return Math.max(wrapSum, nowrapSum);
}

console.log(
  "max circular subarray sum",
  maxCircularSubArraySum([4, -4, 6, -6, 10, -11, 12])
);
// it is not working properly for all the cases  solve it by kadane's algorithm

// Pair Sum Problem
// Given an array A[] and a number x, check for pair in A[] with sum as x
// time complexity : O(n^2)
function pairSum(arr, sum) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        console.log(arr[i], arr[j]);
        return true;
      }
    }
  }
  return false;
}

console.log("pair sum", pairSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19));

// Optimized Solution
// time complexity : O(n)
function OptimizePairSum(arr, sum) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[sum - arr[i]]) {
      console.log(arr[i], sum - arr[i]);
      return true;
    }
    obj[arr[i]] = true;
  }
  return false;
}
console.log("pair sum", OptimizePairSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19));

// smae solution with different approach in while loop 
function OptimizePairSum2(arr, sum) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    if (arr[low] + arr[high] == sum) {
      console.log(arr[low], arr[high]);
      return true;
    } else if (arr[low] + arr[high] < sum) {
      low++;
    } else {
      high--;
    }
  }
  return false;
}
console.log("pair sum", OptimizePairSum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19));
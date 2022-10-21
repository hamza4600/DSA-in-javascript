// recursion
// 1. A function that calls itself
// works on the principle of divide and conquer

// Print 1 to n using recursion
function print(n) {
  if (n === 0) {
    // base case
    return;
  }
  print(n - 1); // recursive call
  console.log(n);
}

// test
print(5);

// sum to n using recursion
function sum(n) {
  if (n === 0) {
    // base case
    return 0;
  }
  let ans = n + sum(n - 1); // recursive call
  return ans;
}

// test
console.log(sum(5)); // 15

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  let ans = num * factorial(num - 1);
  return ans;
}

// test
console.log(factorial(5)); // 120

// Power
function power(base, powe) {
  if (powe === 0) {
    return 1;
  }
  return base * power(base, powe - 1);
}
// test
console.log(power(2, 3)); // 8

// fibonicci series
// very solw approach 
function fibonicci(num){
    if(num === 0 || num === 1){
        return num;
    }
    return fibonicci(num-1) + fibonicci(num-2);
}
// complexity of this function is O(2^n)

// test
console.log(fibonicci(5)); // 5


// Binaray serach using recursion
function binarySearch(arr, target, start, end) {

  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}


// SPiral MAtrix 
function spiral(matrix){
  const res = []
  while(matrix.length){
    const first = matrix.shift()
    res.push(...first)
    for(const m of matrix){
      let val = m.pop()
      if(val)
        res.push(val)
        m.reverse()   
    }
    matrix.reverse()
  }
  return res
}
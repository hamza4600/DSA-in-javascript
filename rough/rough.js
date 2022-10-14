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

// sorting array
function sorrtArray(arr) {
  //  make two loops
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[i]) {
        let tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
      }
    }
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 710, 15, 200, 100];

console.log(sorrtArray(arr));

// Practice Day Four
// factorial
function factorial(n) {
  let num = 1;
  for (var i = 0; i <= n; i++) {
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

// find amx item in array
function MaxI(arr) {
  let max = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
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

// binary search in array for sorted array

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
 

console.log(binarySeaarch([10,50,91] , 91))


/// fibanchi 
function fibnanchi (num) {
	let a =0;
	let b =1;
	let c ;
	var fib =[];
	for(var i=2; i<=num; i++) {
		c = a+b;
		a= b;
		b=c;
		fib.push(c)
	}
	return fib
}
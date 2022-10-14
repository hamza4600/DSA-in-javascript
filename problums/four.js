//  Richest customer wealth
// input : [[1,2,3],[3,2,1]]
// output : 6

// input : [[1,5],[7,3],[3,5]]
// output : 10

function RichestCustomerWealth(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
console.log(
  "Richest customer wealth",
  RichestCustomerWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  RichestCustomerWealth([
    [1, 2, 3],
    [3, 20, 1],
  ])
);

// factroial of a number

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

console.log("factorial of a number", factorial(4));

//sum of 1d array

function OneDArraySum(arr) {
  let sum = 0;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    newArray.push(sum);
  }
  return newArray;
}

console.log("sum of 1d array", OneDArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// number of steps to reduce a number to zero

function numberOfSteps(num) {
  let steps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    steps++;
  }
  return steps;
}

// we can also copy linked list in array and return the middle element of array
// middle of the linked list
// using pointer  pointer moves up when size of list grows by 2 and slow pointer moves up when size of list grows by 1
function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// two given strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// each letter in magazine can only be used once in ransomNote.

function canConstruct(ransomNote, magazine) {
  let map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
      map[magazine[i]]++;
    } else {
      map[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (map[ransomNote[i]]) {
      map[ransomNote[i]]--;
    } else {
      return false;
    }
  }
  return true;
}

// can alsobe wrritten as
var canConstruct2 = function (ransomNote, magazine) {
  const v = magazine.split(""); //array of letters from magazine

  for (let i = 0; i < ransomNote.length; i++) {
    if (!v.includes(ransomNote[i])) {
      //if array doesnt have current letter, return false
      return false;
    }

    const index = v.indexOf(ransomNote[i]);
    v.splice(index, 1); //if array does include, then we remove that element from the array so it cant be used twice
  }
  return true;
};

// pritn value from a string and also non vowels

function printValue(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let nonVovals = [];
  let Vovals = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) { // if str[i] is not vowels
      nonVovals.push(str[i]);
    } else {
      Vovals.push(str[i]);
    }
  }

  // show the result
  function show(arr) {
    for (var i = 0; i <= arr.length - 1; i++) {
      console.log(arr[i]);
    }
  }
  show(Vovals);
  show(nonVovals);
}
printValue("javascriptloop");



// coding challenge 1 for job interview

// number generator function
// digits = "0123456789";
// num = "210"
// output = 4
// wriet a function to calculate nummber of milliseconds needed to type a number with one fingure 
function numGenerator(digits, num) {
  // solution is as 
  let time = 0;
  let index = 0;
  for (let i = 0; i < num.length; i++) {
    let target = digits.indexOf(num[i]);
    time += Math.abs(target - index);
    index = target;
  }
  return time;

}

// there are two left leaves in the binary tree, with values 9 and 15 respectively. return 24

// solution is as

function sumOfLeftLeaves(root) {
  if (!root) return 0;
  let sum = 0;
  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val;
  }
  return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}

// coding challang 
// funcfNumber in arry rerturn yes or No

function funcNumber(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return "YES";
    }
  }
  return "NO";
}

function Odd(l, r) {
  for (var i = l; i <= r; i++) {
    if ((i & 1) === 0) { // if i is even
      console.log(i);
    }
  }
}

// coding challange  leet code
// convert temperature from celsius to fahrenheit

function convertToF(celsius) {
  // input = 36.50
  // output is [309.65 , 97.70] beacuse 36.50 converted to kelvin is 309.65 and 36.50 converted to fareheit is 97.70
  let kelvin = celsius + 273.15;
  let fareheit = (celsius * 9) / 5 + 32;
  return [kelvin, fareheit];

}
// console.log("Temp",convertToF(122.11));

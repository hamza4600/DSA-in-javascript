// factoral of a number

function factorial(num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

// test
console.log(factorial(5)); // 120

// sum of numer to that range
function sumOfNumber(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum += i;
  }
    return sum;
}

// test
console.log(sumOfNumber(5)); // 15
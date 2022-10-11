// print all Number between two numbers

function isPrime(num) {
  for (var i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// print all prime Nummber in number

function showNumber(num1, num2) {
  var number = "";
  for (var i = num1; i <= num2; i++) {
    if (isPrime(i)) {
      number += i + " ";
    }
  }
  return number;
}

// test
console.log(showNumber(10, 100));

// Fiboninacci series
// show sum of two previous number and loop run to num
function fiboninacci(num) {
  var fib = [0, 1];
  for (var i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
//  in c style
function fiboninacciNum(num) {
    var a=0;
    var b=1; 
    var c;
    var fib=[];

    for(var i=2; i<=num; i++){
        c=a+b;
        a=b;
        b=c;
        fib.push(c);
    }
    return fib;
    
}
// test
// console.log(fiboninacci(10));
// console.log(fiboninacciNum(10));



//Given an integer n, return a string array answer (1-indexed) where:

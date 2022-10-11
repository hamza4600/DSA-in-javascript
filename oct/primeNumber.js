// check if number is prime or not
// prime is a number that is only divisible by 1 and itself

function isPrime(num) {
  for (var i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return console.log(` ${num} `, "is not prime");
    }
  }
  return console.log(` ${num} `, "is  prime");
}
isPrime(20);

// non-prime is a number that is divisible by more than 1 and itself

// reverse anumber or string
// is Js style
function Reverse(str) {
  return str.split("").reverse().join("");
}
console.log(Reverse("123456789"));

// in c style
function Reverse(str) {
  var reverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(Reverse("123456789"));

// we can als say that it is reverse a for loop

function ReverForLoop(num) {
  console.log(" Reverse for loop ");
  var reversr = "";
  for (var i = num.length - 1; i >= 0; i--) {
    reversr += num[i];
  }
  console.log(reversr);

  var noRerverse = "";
  console.log(" Normal for loop ");
  for (var j = 0; j <= num.length - 1; j++) {
    noRerverse += num[j];
  }
  console.log(noRerverse);
}

ReverForLoop("123456789");

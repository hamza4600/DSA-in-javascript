// consvert Number to binary

// divide number by 2 and store the remainder if remance is 1 then add to binary number || if remance is 0 then add 0 to binary number  repeat the process until number is 0
function Binary(num) {
  var binary = [];
  while (num > 0) {
    binary.push(num % 2);
    num = Math.floor(num / 2);
  }
  return binary.reverse().join("");
}

// test
console.log(Binary(294)); // 1010

// convert binary to decimal
// reverse the binary number and multiply each digit by 2 to the power of its position
function Decimal(num) {
  var decimal = 0;
  var binary = num.toString().split("").reverse();
  for (var i = 0; i < binary.length; i++) {
    decimal += binary[i] * Math.pow(2, i);
  }
  return decimal;
}

// test
console.log(Decimal(1010100100)); // 10

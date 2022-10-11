// anstrom Number
// pow(5, 2) = 25   OR 5 * 5 = 25
// pow(5, 4) = 625  OR 5 * 5 * 5 * 5 = 625 
function armStromNumber(num) {
  var armStrom = 0;
  var number = num.toString().split("");
  for (var i = 0; i < number.length; i++) {
    armStrom += Math.pow(number[i], number.length);
  }
  return armStrom === num ? true : false;
}

// test
console.log(armStromNumber(153)); // true

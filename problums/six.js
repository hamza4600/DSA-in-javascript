// coding challenge
// Baseball Game
// input : ["5","2","C","D","+"]
// output : 30

var calPoint = function (ops) {
  var result = null;
  var temp = [];
  for (var i = 0; i < ops.length; i++) {
    if (ops[i] === "+") {
      temp.push(temp[temp.length - 1] + temp[temp.length - 2]);
    } else if (ops[i] === "C") {
      temp.pop();
    } else if (ops[i] === "D") {
      temp.push(temp[temp.length - 1] * 2);
    } else {
      temp.push(parseInt(ops[i]));
    }
  }
  result = temp.reduce((a, b) => a + b, 0);
  return result;
};
// Test
console.log(calPoint(["5", "2", "C", "D", "+"]));
// coding challenge
// Valid Parentheses
// input : "([)]"
// output : invalid
// input : "()[]{}"
// output : valid

var isValid = function (s) {
  var stack = [];
  var map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      var last = stack.pop();
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

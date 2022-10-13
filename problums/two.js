// pritn value from a string and also non vowels

function printValue(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let nonVovals = [];
  let Vovals = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
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
 

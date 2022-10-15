// Character Array
// In Programming language, we can store a string in a character array.
// const charArray = ["a", "b", "c", "d", "e"];
function Character() {
  // take input from user
  const charArray = "Enterthecharacterarray";
  const charArra = "Enterthecharacterarray".split(""); // convert string to array
  // print the array
  console.log("Character Array", charArray.length);
}

Character();
// take input from user from terminal

// check if a  character is vowel or not
const vowels = ["a", "e", "i", "o", "u"];
function isVowel(char) {
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}
console.log("isVowel", isVowel("a"));

// check if a character is palindrome or not
// palindrome is a word which is same when read from left to right and right to left
function isPalindrome(char) {
  let reverse = "";
  for (let i = char.length - 1; i >= 0; i--) {
    reverse += char[i];
  }
  if (char === reverse) {
    return true;
  }
  return false;
}
console.log("isPalindrome", isPalindrome("madam"));

// it can also be written as
function isPalindrome2(char) {
  let reverse = char.split("").reverse().join("");
  if (char === reverse) {
    return true;
  }
  return false;
}
console.log("isPalindrome2", isPalindrome2("madam"));

// it can also be written as
function isPalindrome3(char) {
  return char === char.split("").reverse().join("");
}

console.log("isPalindrome3", isPalindrome3("madam"));

// it can also be written as
function isPalindrome4(char) {
  let bool = true;
  for (let i = 0; i < char.length; i++) {
    if (char[i] !== char[char.length - 1 - i]) {
      bool = false;
      break;
    }
  }
  return bool;
}
console.log("isPalindrome4", isPalindrome4("madam"));

// largest word in a sentence
function largestWord(sentence) {
  let words = sentence.split(" ");
  let largest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > largest.length) {
      largest = words[i];
    }
  }
  return largest;
}
console.log("largestWord===", largestWord("this is a sentence"));

// it can also be written as  Return the length of the longest word in the provided sentence.
function largestWord2(sentence) {
  let i = 0;
  let currLen = 0;
  let maxLen = 0;

  while (i < sentence.length) {
    if (sentence[i] === " ") {
      currLen = 0;
    } else {
      currLen++;
    }
    if (currLen > maxLen) {
      maxLen = currLen;
    }
    i++;
  }
  return maxLen;
}
console.log("largestWord2===", largestWord2("this is a sentence"));


// when to use while loop and when to use for loop
// for loop is used when we know the number of iterations
// while loop is used when we want to iterate until a condition is true
// while loop is also used when we don't know the number of iterations
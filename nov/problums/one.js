// isomorphism string
function Iso(s, t) {
  if (s.length != t.length) {
    return false;
  }

  cMap = {};
  tMap = {};

  for (let i = 0; i < s.length; i++) {
    cChar = s[i];
    tChar = t[i];

    if (cMap[cChar] === undefined) {
      cMap[cChar] = tChar;
    }
    if (tMap[tChar] === undefined) {
      tMap[tChar] = cChar;
    }

    if (cMap[cChar] != tChar || tMap[tChar] != cChar) {
      return false;
    }
  }
  return true;
}

// is SUb STring
var SubStr = function (s, t) {
  // base case
  if (s.length > t.length) return false;
  let count = 0;
  for (var i = 0; i < t.length; i++) {
    if (s[count] === t[i]) {
      count++;
    }
  }
  return count === s.length;
};
// console.log(SubStr('acb' , 'ahbgdc'))

// merger twi lists
function mergerArrays(list1, list2) {
  let newArr = [];
  if (list1.length === 0 && list2.length === 0) {
    return newArr;
  }
  if (list1.length === 1) {
    newArr.push(list1[0]);
  }
  if (list2.length === 1) {
    newArr.push(list2[0]);
  }

  for (var i = 0; i < list1.length; i++) {
    if (list1[i] <= list2[i]) {
      newArr.push(list1[i], list2[i]);
    }
  }
  return newArr;
}
let list1 = [];
let list2 = [0];

function mergeLin(list1, list2) {
  // class LinkList {
  //     constructor(value){
  //         this.value= value;
  //         this.next = null
  //     }
  // }
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

// console.log(merger(list1, list2));
function ReveLink(head) {
  let previus = null;
  while (head) {
    let next = head.next;
    head.next = previus;
    previus = head;
    head = next;
  }
  return previus;
}
function RevL(head) {
  let curr = head;
  let prev = null;
  let nxt = null;
  while (curr != null) {
    nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }
  return prev;
}
// how to find middle  of link List ?
function midLink(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Mean , Median , Mode
function N(input) {
  let arr = input;
  let mean = 0;
  let median = 0;
  let mode = 0;
  let obj = {};
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    mean += parseInt(arr[i]);
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
    if (obj[arr[i]] > max) {
      max = obj[arr[i]];
      mode = arr[i];
    }
  }
  mean = mean / arr.length;
  // arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    median =
      (parseInt(arr[arr.length / 2]) + parseInt(arr[arr.length / 2 - 1])) / 2;
  } else {
    median = parseInt(arr[Math.floor(arr.length / 2)]);
  }
  console.log(mean.toFixed(1));
  console.log(median.toFixed(1));
  console.log(mode);
}
// sales by match
function sockMerchant(n, ar) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (obj[ar[i]] === undefined) {
      obj[ar[i]] = 1;
    } else {
      obj[ar[i]] += 1;
    }
  }
  for (let key in obj) {
    count += Math.floor(obj[key] / 2);
  }
  return count;
}

// counting Valleys
function countingValleys(steps, path) {
  let count = 0;
  let valley = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      count++;
    } else {
      count--;
    }
    if (count === 0 && path[i] === "U") {
      valley++;
    }
  }
  return valley;
}

// jumping on the clouds
function jumpingOnClouds(c) {
  let count = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (c[i + 2] === 0) {
      i += 2;
      count++;
    } else {
      i++;
      count++;
    }
  }
  return count;
}

// repeated string
function repeatedString(s, n) {
  let count = 0;
  let aCount = 0;
  let repeat = Math.floor(n / s.length);
  let remainder = n % s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      aCount++;
    }
  }
  for (let i = 0; i < remainder; i++) {
    if (s[i] === "a") {
      count++;
    }
  }
  return aCount * repeat + count;
}

// table
function table(n) {
  for (var i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + n * i);
  }
}

// viedo conferencing
// making a viedo conferencing app
// if a user name is
// input mary , stacy , sam , samual , sam , , mignal
// output m , s , sa , samu , sam 2 , mi
// if a user name is
// input mary , stacy , sam , samual , sam , , mignal
// output m , s , sa , samu , sam 2 , mi

function viedoConferencing(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
  }
  return result;
}

const name = ["mary", "stacy", "sam", "samuel", "sam", "miguel"];
console.log(viedoConferencing(name));

// 
function Arranege(strs) {
  const map = {};

  for (let str of strs) {
    const key = [...str].sort().join('');

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }
  return Object.values(map);
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log(Arranege(strs))

//
function Comm(strs) {
  if (strs === undefined || strs.length === 0) return ""

  let prefix = '';
  let maxPrefixLength = Math.min(...strs.map(str => str.length));
  for (let i = 0; i < maxPrefixLength; i++) {
    let char = strs[0][i];
    if (strs.every(str => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  };
  return prefix;
}

let strs2 = ["flower", "flow", "flight"]

console.log(Comm(strs2))


// Suppose a family has  children, one of which is a boy. What is the probability that both childern are boys?
// how to solve this problem ?
// 1/3 because there are 3 possible outcomes

// A bag contains 3 red marbles and 4 blue marbles. Then, 2 marbles are drawn from the bag, at random, without replacement. If the first marble drawn is red, what is the probability that the second marble is blue?
// 2/3 because there are 2 red marbles and 4 blue marbles

// You draw 2 cards from a standard 52 -card deck without replacing them. What is the probability that both cards are of the same suit?
// answer 12/51 because there are 13 cards in each suit
 

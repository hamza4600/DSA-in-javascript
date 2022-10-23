// Problums on rescursion
// check an array is sorte or not

function isSorted(arr) {
  if (arr.length === 1) return true;
  return arr[0] < arr[1] && isSorted(arr.slice(1));
}

console.log(isSorted([1, 2, 3, 4, 5, 6, 7, 8, 9])); // returns true

// print items  in array
// slice method is used to take slice of array or it makes copy of array it does not mutate original array
function printItems(arr) {
    if (arr.length === 0) return;
    console.log(arr[0]);
    printItems(arr.slice(1));
}

printItems([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// in decCREASING order
function printItems2(arr) {
    if (arr.length === 0) return;
    printItems(arr.slice(1));
    console.log(arr[0]);
}

printItems2([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// sum of array
function sum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function reverseString(str){
    if(str.length <= 1) return str;
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));

// replace pi using recursion 3.14

function replace(str) {
    if(str.length === 0 ) return  "";
    if(str[0] === "p" && str[1] === "i") {
        return "3.14" + replace(str.slice(2));
    }else {
        return str[0] + replace(str.slice(1));
    }
}

console.log(replace("pippjjgpibhdcbhdhpijd"));

// remove duplicated str

function removeDuplicat(str){
    if(str.length === 0) return "";
    if(str[0] === str[1]) {
        return removeDuplicat(str.slice(1));
    }
    else {
        return str[0] + removeDuplicat(str.slice(1));
    }
}

console.log(removeDuplicat("aaabbbcccdddeeefffggg"));

// move all x at end of string

function moveX(str) {
    if(str.length === 0) return "";
    if(str[0] === "x"){
        return moveX(str.slice(1)) + "x";
    }else {
        return str[0] + moveX(str.slice(1));
    }
}

console.log(moveX("axxbxxcxxx"));

// substring
function subStr(str){
    if(str.length === 0) return [""];
    let smallAns = subStr(str.slice(1));
    let ans = [];
    for(let i = 0; i < smallAns.length; i++) {
        ans.push(smallAns[i]);
        ans.push(str[0] + smallAns[i]);
    }
    return ans;

}

console.log(subStr("abc"));


// all posible permutation of string
function strPremitutation(str){
    if(str.length === 0) return [""];
    let smallAns = strPremitutation(str.slice(1));
    let ans = [];
    for(let i = 0; i < smallAns.length; i++) {
        for(let j = 0; j <= smallAns[i].length; j++) {
            ans.push(smallAns[i].slice(0, j) + str[0] + smallAns[i].slice(j));
        }
    }
    return ans;
}

console.log(strPremitutation("abc"));

// count no of path in possible from strat to end in gameboard

function countPath(n) {
    if(n === 0) return 1;
    if(n < 0) return 0;
    return countPath(n - 1) + countPath(n - 2) + countPath(n - 3);

}

console.log(countPath(6));

// nu of paths in a maze
// rows and columns
function nuPathMaze(n, m) {
    if(n === 1 || m === 1) return 1;
    return nuPathMaze(n - 1, m) + nuPathMaze(n, m - 1);
}

console.log(nuPathMaze(3, 3));

// Paring friends problum
function paringF(n){
    if(n === 0 || n === 1) return 1;
    return paringF(n - 1) + (n - 1) * paringF(n - 2);
}

console.log(paringF(4));
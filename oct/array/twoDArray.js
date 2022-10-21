// Multi dimesional array
// are like matrix
//  it is basically concatenation of  arrays

const twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
];

// show outPut
function showTwodArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      console.log(" ", arr[i][j]);
    }
  }
}
showTwodArray(twoDArray);

// searching Matric Array
function searchMatrix(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) {
        console.log("Index of target is ", i, j);
        console.log("Row is ", arr[i]);
        return true;
      }
    }
  }
  return false;
}
console.log("searching Matric Array", searchMatrix(twoDArray, 5));

// Spiral order Matrix Traversal
// Spiral order work in clockwise direction and anticlockwise direction OR like a snake
// clockwise direction
// time complexity : O(n^2)
function spiralOrder(arr) {
  let result = [];
  let startRow = 0;
  let endRow = arr.length - 1;
  let startCol = 0;
  let endCol = arr[0].length - 1;
  while (startRow <= endRow && startCol <= endCol) {
    // top row
    for (var i = startCol; i <= endCol; i++) {
      result.push(arr[startRow][i]);
    }
    startRow++;
    // right col
    for (var i = startRow; i <= endRow; i++) {
      result.push(arr[i][endCol]);
    }
    endCol--;
    // bottom row
    for (var i = endCol; i >= startCol; i--) {
      result.push(arr[endRow][i]);
    }
    endRow--;
    // left col
    for (var i = endRow; i >= startRow; i--) {
      result.push(arr[i][startCol]);
    }
    startCol++;
  }
  return result;
}

console.log("Spiral order Matrix Traversal", spiralOrder(twoDArray));

// given a square matrix , switch its rows and columns indices of matrix
// time complexity : O(n^2)
// we swap row in column and column in row
const threeDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function transposeMatrix(arr) {
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr[i].length; j++) {
      let temp = arr[i][j]; 
      arr[i][j] = arr[j][i]; 
      arr[j][i] = temp;
    }
  }
  return arr;
}
console.log("transpose Matrix", transposeMatrix(threeDArray));

// Problum
// 2-d array is a matrix mutilply  these matrix  output should be a matrix

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function multiplyMatrix(arr1, arr2) {
  let result = [];
  for (var i = 0; i < arr1.length; i++) {
    result.push([]);
    for (var j = 0; j < arr2[i].length; j++) {
      result[i].push(0);
      for (var k = 0; k < arr1[i].length; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return result;
}
console.log("multiply Matrix", multiplyMatrix(matrix1, matrix2));

// Search in Matrix
// and matrix is sorted
// time complexity : O(n)
const sortedMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function searchSortedMatrix(arr, target) {
  let i = 0; // start row
  let j = arr[0].length - 1;  // start col
  while (i < arr.length && j >= 0) { // if i is less than row length and j is greater than 0
    if (arr[i][j] === target) {
      console.log("Index of target is ", i, j);
      console.log("Row is ", arr[i]);
      return true;
    } else if (arr[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

console.log("searchSortedMatrix", searchSortedMatrix(sortedMatrix, 5));

// if matrix is not sorted
// time complexity : O(n^2)
function searchMatrix2(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) { 
        console.log("Index of target is ", i, j);
        console.log("Row is ", arr[i]);
        return true;
      }
    }
  }
  return false;
}
console.log("searching Matric Array", searchMatrix2(twoDArray, 5));


//  Matrxi  

// comman element in k sorted array 


function commonElements(arr) {
    let hashMap = {};
    let last;
    let ans = []

    for (var i = 0; i < arr.length; i++) {
        let currentArray = arr[i]
        last = null

        for (var j = 0; j < currentArray.length; j++) {
            let currentItem = currentArray[j];
            if (!hashMap[currentItem]) {
                hashMap[currentItem] = 1;
            } else {
                hashMap[currentItem]++;
            }
        }
        last = currentArray
    }
    // let count =1; can use if want to count the number 
    for (var prps in hashMap) {
        if (hashMap[prps] === arr.length) {

            ans.push(prps)
        }
    }

    return ans
}

const twoD = [[1, 2, 3], [1, 2, 3, 4], [1, 2]]

// console.log(commonElements(twoD)); // [ 1, 2 ]


var M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

function spiralMatrix(arr) {
    let topRow = 0,
        leftCol = 0,
        btmRow = arr.length - 1,
        rightCol = arr[0].length - 1;

    while (topRow < btmRow && leftCol < rightCol) {
        for (var c = 0; c <= rightCol; c++) {
            console.log(arr[topRow][c])
        }
        topRow++;
        for (var r = topRow; r <= btmRow; r++) {
            console.log(arr[r][rightCol])
        }
        rightCol--;
        if (topRow <= btmRow) {
            for (var c = rightCol; c >= 0; c--) {
                console.log(arr[btmRow][c])
            }
            btmRow--;
        }
        if (leftCol <= rightCol) {
            for (var r = btmRow; r > topRow; r--) {
                console.log(arr[r][leftCol])
            }
            leftCol++
        }
    }
}

// spiralMatrix(M);

// Rotate matrix 
// 5 by 5 matrix 
const Five = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

function rotateMatrix(arr) {

    for (var row = 0; row < arr.length; row++) {
        for (var col = 0; col < row; col++) {
            let temp = arr[row][col];
            arr[row][col] = arr[col][row];
            arr[col][row] = temp;
        }
    }
    return arr
}

// console.log(rotateMatrix(Five));

// maze Matrix 
 

// Tic tac toe

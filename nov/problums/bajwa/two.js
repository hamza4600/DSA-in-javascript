// Back tracking solution
// n queen problum  in recursion

function nQueen(board, row) {
    if (row === board.length) {
        console.log(board);
        return;
    }
    for (let col = 0; col < board.length; col++) {
        if (isSafe(board, row, col)) {
            board[row][col] = 1;
            if (nQueen(board, row + 1)) {
                return true;
            }
            board[row][col] = 0;
        }
    }
    // return false;
}

function isSafe(board, row, col) {
    // vertical
    for (let i = row - 1; i >= 0; i--) {
        if (board[i][col] === 1) {
            return false;
        }
    }
    // left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) {
            return false;
        }
    }
    // right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] === 1) {
            return false;
        }
    }
    return true;
}


let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

// nQueen(board, 0);`


// sudoko solver in recursion and backtracking
// 0 means empty cell

var solveSodu = function (board) {

    const isValid = (board, row, col, num) => {
        let rowDiff = Math.floor(row / 3) * 3;
        let colDiff = Math.floor(col / 3) * 3;
        // check in row
        for (var i = 0; i < board.length; i++) {
            if (board[row][i] === num) {
                return false;
            }
            if (board[i][col] === num) {
                return false;
            }
//            check in 3*3 box  
            if (board[rowDiff + Math.floor(i / 3)][colDiff + i % 3] === num) {
                return false;
            }
        }
        return true;
    }

    const SolverSudko = (board) => {
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                if (board[i][j] === 0) { // if we found 0 then we have to fill it
                    for (var num = 1; num <= 9; num++) {
                        if (isValid(board, i, j, num)) {
                            board[i][j] = num; //  if we found valid number then we have to fill it
                            if (SolverSudko(board)) { //  recursion call
                                return true;
                            }
                            board[i][j] = 0; // if we found invalid number then we have to make it 0
                        }
                    }
                    return false;  // did not find any valid number
                }
            }
        }
        return true; // all number are filled
    }
    SolverSudko(board);
    return board;
}

// console.log(solveSodu([
//     [3, 0, 6, 5, 0, 8, 4, 0, 0],
//     [5, 2, 0, 0, 0, 0, 0, 0, 0],
//     [0, 8, 7, 0, 0, 0, 0, 3, 1],
//     [0, 0, 3, 0, 1, 0, 0, 8, 0],
//     [9, 0, 0, 8, 6, 3, 0, 0, 5],
//     [0, 5, 0, 0, 9, 0, 6, 0, 0],
//     [1, 3, 0, 0, 0, 0, 2, 5, 0],
//     [0, 0, 0, 0, 0, 0, 0, 7, 4],
//     [0, 0, 5, 2, 0, 6, 3, 0, 0]
// ]));


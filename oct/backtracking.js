// Backtracking algorithm for finding a path from a start to a goal
// Rat in a maze proble

function pathinMaze(maze) {
    // console.table(maze);
  let path = [];
  let n = maze.length;
  let m = maze[0].length;
  let visited = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < m; j++) {
      temp.push(false);
    }
    visited.push(temp);
  }
  function findPath(i, j) {
    if (
      i < 0 ||
      i >= n ||
      j < 0 ||
      j >= m ||
      maze[i][j] === 0 ||
      visited[i][j]
    ) {
      return;
    }
    if (i === n - 1 && j === m - 1) {
      path.push([i, j]);
      return;
    }
    visited[i][j] = true;
    path.push([i, j]);
    findPath(i - 1, j);
    findPath(i, j + 1);
    findPath(i + 1, j);
    findPath(i, j - 1);
    visited[i][j] = false;
    path.pop();
  }
  findPath(0, 0);
  return path;
}

const maze = [
  [1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
];
// text

console.table(pathinMaze(maze));
// // 8 queen problem

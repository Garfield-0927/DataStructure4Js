function numIslands(grid: string[][]): number {
  const isVisited: Boolean[][] = [];
  const col = grid[0].length;
  const row = grid.length;
  for (let i = 0; i < row; i++) {
    isVisited.push(new Array(col).fill(false));
  }

  const iterateNode = (i: number, j: number) => {
    // 越界处理
    if (i < 0 || j < 0 || i >= row || j >= col) {
      return;
    }
    // 已经访问过
    if (isVisited[i][j]) {
      return;
    }
    // 是水
    if (grid[i][j] === '0') {
      return;
    }
    isVisited[i][j] = true;
    iterateNode(i, j + 1);
    iterateNode(i + 1, j);
    iterateNode(i - 1, j);
    iterateNode(i, j - 1);
  };
  let res = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '0' || isVisited[i][j]) {
        continue;
      } else {
        iterateNode(i, j);
        res++;
      }
    }
  }
  return res;
}

const res = numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]);
// const res = numIslands([
//   ['1', '1', '0', '0', '0'],
//   ['1', '1', '0', '0', '0'],
//   ['0', '0', '1', '0', '0'],
//   ['0', '0', '0', '1', '1'],
// ]);
console.log(res);

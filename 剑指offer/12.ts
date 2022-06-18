function exist(board: string[][], word: string): boolean {
  if (!board.length) return false;
  const row = board.length;
  const col = board[0].length;
  const hasVisited = new Array(row);
  for (let i = 0; i < row; i++) {
    hasVisited[i] = new Array(col).fill(false);
  }
  const dfs = (i: number, j: number, str: string): boolean => {
    if (!str) return true;

    // 越界处理
    if (i < 0 || j < 0 || i >= row || j >= col) {
      return false;
    }
    // 不符合
    if (board[i][j] !== str[0]) return false;
    // 已访问过
    if (hasVisited[i][j]) return false;

    hasVisited[i][j] = true;
    const targetStr = str.slice(1);
    const res =
      str.length === 1 ||
      dfs(i, j + 1, targetStr) ||
      dfs(i + 1, j, targetStr) ||
      dfs(i, j - 1, targetStr) ||
      dfs(i - 1, j, targetStr);
    hasVisited[i][j] = false;
    return res;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, word)) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(
  exist(
    [
      ['a', 'b'],
      ['c', 'd'],
    ],
    'acdb'
  )
);

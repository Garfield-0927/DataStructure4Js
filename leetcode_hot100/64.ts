function minPathSum(grid: number[][]): number {
  const row = grid.length;
  const col = grid[0].length;
  const dp: number[][] = new Array(row);

  // 初始化dp数组
  for (let i = 0; i < row; i++) {
    dp[i] = new Array(col).fill(0);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const top = i - 1 >= 0 ? dp[i - 1][j] : -1;
      const left = j - 1 >= 0 ? dp[i][j - 1] : -1;
      let prevMin: number;
      if (top < 0 && left < 0) {
        prevMin = 0;
      } else if (top < 0 || left < 0) {
        prevMin = Math.max(top, left);
      } else {
        prevMin = Math.min(top, left);
      }
      dp[i][j] = prevMin + grid[i][j];
    }
  }

  return dp[row - 1][col - 1];
}

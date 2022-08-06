// dp[i][j] 为 i j 处能够获得的最大的礼物价值和
// dp[0][0] = grid[0][0]
// dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
function maxValue(grid: number[][]): number {
  const row = grid.length;
  const col = grid[0].length;
  const dp = new Array<number[]>(row);
  for (let i = 0; i < row; i++) {
    dp[i] = new Array<number>(col).fill(0);
  }
  dp[0][0] = grid[0][0];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!i && !j) continue;
      const fromRight = j - 1 >= 0 ? dp[i][j - 1] : 0;
      const fromTop = i - 1 >= 0 ? dp[i - 1][j] : 0;
      dp[i][j] = Math.max(fromRight, fromTop) + grid[i][j];
    }
  }
  return dp[row - 1][col - 1];
}
